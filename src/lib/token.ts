import { cookies } from 'next/headers'

export function isToken() {
    const cookieName = process.env.SESSION_COOKIE_NAME as string;
    const found = cookies().get(cookieName);
    if (!found) {
        return false;
    }

    return true;
}