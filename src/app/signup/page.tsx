import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormSignup } from '@/components/form-signup'
import { redirect } from 'next/navigation'
import CryptoJS from 'crypto-js'
import { cookies } from "next/headers"

export const metadata: Metadata = {
    title: 'Signup | AppFrame'
}

export default async function Signup() {
    const cookieName = process.env.SESSION_COOKIE_NAME as string;
    const found = cookies().get(cookieName);
    if (found) {
        const bytes = CryptoJS.AES.decrypt(found.value, process.env.SECRET_COOKIE_PASSWORD as string);
        const accessToken = bytes.toString(CryptoJS.enc.Utf8);
        if (accessToken) {
            redirect(process.env.URL_ADMIN as string);
        }   
    }

    return (
        <>
            <main className={styles.main}>
                <p>LOGO</p>

                <ul>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/signup">Signup</Link>
                    </li>
                </ul>

                <FormSignup />
            </main>
        </>
    )
}