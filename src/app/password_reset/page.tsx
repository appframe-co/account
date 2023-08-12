import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormPasswordReset } from '@/components/form-password-reset'

export const metadata: Metadata = {
    title: 'Reset password | AppFrame'
}

export default function PasswordReset() {
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

                <FormPasswordReset />
            </main>
        </>
    )
}