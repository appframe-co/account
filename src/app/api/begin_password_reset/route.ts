import { NextResponse } from 'next/server'

 export async function POST(req: Request) {
    try {
        const url = process.env.URL_ACCOUNT + '/password_reset';
        const senderName = 'AppFrame';

        const body = await req.json();
        const res = await fetch(process.env.URL_USER_SERVICE + '/api/begin_password_reset', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify({url, senderName, ...body})});
        const {status, data} = await res.json();

        return NextResponse.json(data, { status });
    } catch (e) {
        NextResponse.json({ error: 'failed to fetch data' }, { status: 500 });
    }
}