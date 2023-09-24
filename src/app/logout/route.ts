import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const cookieName = process.env.SESSION_COOKIE_NAME as string;
    const domain = 'Domain='+process.env.URL_COOKIE_DOMAIN;

    return NextResponse.redirect(process.env.URL_ACCOUNT as string, {headers: { 'Set-Cookie': `${cookieName}=deleted; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; ${domain}` }});
}