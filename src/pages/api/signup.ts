import { withSessionRoute } from "@/lib/withSession";
import type { NextApiRequest, NextApiResponse } from 'next';

declare module "iron-session" {
    interface IronSessionData {
        accessToken?: string
      }
}

export default withSessionRoute(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const resFetch = await fetch(process.env.URL_USER_SERVICE + '/api/signup', {method: 'POST',  headers: {
                'Content-Type': 'application/json',
              }, body: JSON.stringify(req.body)});
            const {access_token: accessToken} = await resFetch.json();
    
            req.session.accessToken = accessToken;
            await req.session.save();
    
            return res.status(200).json({error: null});
        } catch (err) {
            res.status(500).json({ error: 'failed to fetch data' });
        }
    } else {
        res.status(404).json({ error: 'Not found' });
    }
}