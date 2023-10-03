import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormLogin } from '@/components/form-login'
import { redirect } from 'next/navigation'
import { isToken } from '@/lib/token'

export const metadata: Metadata = {
    title: 'Log in | AppFrame'
}

export default function Login() {
    if (isToken()) {
        redirect(process.env.URL_PROJECT_ADMIN as string);
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.logo}><span>AppFrame</span> / Log in</div>
                <div className={styles.container}>
                    <FormLogin />
                </div>
                <div className='info'><span>New to AppFrame?</span> <Link href="/signup">Get started</Link></div>
            </main>
        </>
    )
}