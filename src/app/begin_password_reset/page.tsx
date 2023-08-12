import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormBeginPasswordReset } from '@/components/form-begin-password-reset'

export const metadata: Metadata = {
    title: 'Begin reset password | AppFrame'
}

export default function BeginResetPassword() {
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

                <FormBeginPasswordReset />
            </main>
        </>
    )
}