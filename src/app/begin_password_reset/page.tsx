import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormBeginPasswordReset } from '@/components/form-begin-password-reset'
import { redirect } from 'next/navigation'
import { isToken } from '@/lib/token'

export const metadata: Metadata = {
    title: 'Begin reset password | AppFrame'
}

export default function BeginResetPassword() {
    if (isToken()) {
        redirect(process.env.URL_PROJECT_ADMIN as string);
    }

    return (
        <>
            <main className={styles.main}>
                <p>AppFrame</p>

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