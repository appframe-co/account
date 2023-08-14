import CryptoJS from 'crypto-js'
import { cookies } from "next/headers"

export function isToken() {
    const cookieName = process.env.SESSION_COOKIE_NAME as string;
    const found = cookies().get(cookieName);
    if (found) {
        const bytes = CryptoJS.AES.decrypt(found.value, process.env.SECRET_COOKIE_PASSWORD as string);
        const accessToken = bytes.toString(CryptoJS.enc.Utf8);
        if (accessToken) {
            return true;
        }   
    }

    return false;
}