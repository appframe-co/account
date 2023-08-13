'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type Inputs = {
    username: string
    password: string
}

export function FormLogin() {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/login', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(data)});
        const dataJson = await res.json();
        if (!dataJson.error) {
            router.refresh();
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <input {...register("username")} />
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password", { required: true, maxLength: 100 })} type="password" />
                    {errors.password && <span>This field is required</span>}
                </div>

                <div>
                    <Link href="/begin_password_reset">Forget password?</Link>
                </div>

                <input type="submit" value="Login" />
            </form>
        </>
    )
}