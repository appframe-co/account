import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormSignup } from '@/components/form-signup'

export const metadata: Metadata = {
    title: 'Signup | AppFrame'
}

export default function Signup() {
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