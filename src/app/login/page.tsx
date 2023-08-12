import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormLogin } from '@/components/form-login'

export const metadata: Metadata = {
    title: 'Login | AppFrame'
}

export default function Login() {
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