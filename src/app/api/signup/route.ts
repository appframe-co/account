import { NextResponse } from 'next/server'

 export async function POST(req: Request) {
    try {
        const body = await req.json();
        const res = await fetch(process.env.URL_AUTH_SERVICE + '/api/signup', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(body)});
        const data = await res.json();

        if (data.accessToken) {
            const {accessToken} = data;

            const cookieValue = accessToken;
            const cookieName = process.env.SESSION_COOKIE_NAME;
            const d = new Date();
            d.setTime(d.getTime() + (7*24*60*60*1000));
            const expires = "expires="+ d.toUTCString();
            return NextResponse.json({error: null}, {headers: { 'Set-Cookie': `${cookieName}=${cookieValue}; ${expires}; path=/` }});
        } else {
            return NextResponse.json(data);
        }
    } catch (e) {
        NextResponse.json({ error: 'failed to fetch data' }, { status: 500 });
    }
}