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
        redirect(process.env.URL_PROJECT_ADMIN as string);
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.logo}><span>AppFrame</span> / Create Project</div>
                <div className={styles.container}>
                    <FormSignup />
                </div>
                <div className='info'><span>Already have a AppFrame Project?</span> <Link href="/login">Log in</Link></div>
            </main>
        </>
    )
}