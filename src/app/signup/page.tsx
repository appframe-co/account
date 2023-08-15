import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormSignup } from '@/components/form-signup'
import { redirect } from 'next/navigation'
import { isToken } from '@/lib/token'

export const metadata: Metadata = {
    title: 'Signup | AppFrame'
}

export default function Signup() {
    if (isToken()) {
        redirect(process.env.URL_ADMIN as string);
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

                <FormSignup />
            </main>
        </>
    )
}