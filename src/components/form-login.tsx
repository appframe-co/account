'use client'

import Link from 'next/link'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    username: string
    password: string
}

export function FormLogin() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Username</label>
                    <input {...register("username")} />
                </div>  
                <div>
                    <label>Пароль</label>
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