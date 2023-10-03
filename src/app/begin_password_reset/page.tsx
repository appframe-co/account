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
                <div className={styles.logo}><span>AppFrame</span> / Begin password reset</div>
                <div className={styles.container}>
                    <FormBeginPasswordReset />
                </div>
                <div className='info'><span>Already have a AppFrame Project?</span> <Link href="/login">Log in</Link></div>
            </main>
        </>
    )
}