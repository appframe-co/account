import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormLogin } from '@/components/form-login'
import { redirect } from 'next/navigation'
import { isToken } from '@/lib/token'

export const metadata: Metadata = {
    title: 'Login | AppFrame'
}

export default async function Login() {
    if (isToken()) {
        redirect(process.env.URL_ADMIN as string);
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

                <FormLogin />
            </main>
        </>
    )
}