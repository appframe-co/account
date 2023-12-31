import { NextResponse } from 'next/server'

 export async function POST(req: Request) {
    try {
        const body = await req.json();
        const res = await fetch(process.env.URL_AUTH_SERVICE + '/api/password_reset', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(body)});
        const data = await res.json();

        return NextResponse.json(data);
    } catch (e) {
        NextResponse.json({ error: 'failed to fetch data' }, { status: 500 });
    }
}