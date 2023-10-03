import type { Metadata } from 'next'
import Link from 'next/link'
import styles from './page.module.css'
import { FormPasswordReset } from '@/components/form-password-reset'
import { redirect } from 'next/navigation'
import { isToken } from '@/lib/token'

export const metadata: Metadata = {
    title: 'Reset password | AppFrame'
}

export default function PasswordReset({searchParams}: {searchParams: { [key: string]: string | undefined }}) {
    if (isToken()) {
        redirect(process.env.URL_PROJECT_ADMIN as string);
    }

    const {recovery_id: recoveryId, recovery_hash: recoveryHash} = searchParams;
    if (!recoveryId || !recoveryHash) {
        redirect('/begin_password_reset');
    }

    return (
        <>
            <main className={styles.main}>
                <div className={styles.logo}><span>AppFrame</span> / Password reset</div>
                <div className={styles.container}>
                    <FormPasswordReset recoveryId={recoveryId} recoveryHash={recoveryHash} />
                </div>
                <div className='info'><span>Already have a AppFrame Project?</span> <Link href="/login">Log in</Link></div>
            </main>
        </>
    )
}