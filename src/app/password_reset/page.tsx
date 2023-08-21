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
                <p>AppFrame</p>

                <ul>
                    <li>
                        <Link href="/login">Login</Link>
                    </li>
                    <li>
                        <Link href="/signup">Signup</Link>
                    </li>
                </ul>

                <FormPasswordReset recoveryId={recoveryId} recoveryHash={recoveryHash} />
            </main>
        </>
    )
}