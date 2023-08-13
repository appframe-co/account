import { NextResponse } from 'next/server'
import CryptoJS from 'crypto-js'

 export async function POST(req: Request) {
    try {
        const body = await req.json();
        const res = await fetch(process.env.URL_USER_SERVICE + '/api/login', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(body)});
        const {status, data} = await res.json();
        
        if (data.access_token) {
            const {access_token: accessToken} = data;

            const cookieValue = CryptoJS.AES.encrypt(accessToken, process.env.SECRET_COOKIE_PASSWORD as string).toString();
            const cookieName = process.env.SESSION_COOKIE_NAME;
            const d = new Date();
            d.setTime(d.getTime() + (7*24*60*60*1000));
            const expires = "expires="+ d.toUTCString();
            return NextResponse.json({error: null}, {headers: { 'Set-Cookie': `${cookieName}=${cookieValue}; ${expires}; path=/` }});
        } else {
            return NextResponse.json(data, { status });
        }
    } catch (e) {
        NextResponse.json({ error: 'failed to fetch data' }, { status: 500 });
    }
}