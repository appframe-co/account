'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    email: string
    username: string
    password: string
}

export function FormSignup() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                </div>
                <div>
                    <label>Username</label>
                    <input {...register("username", { required: true, maxLength: 32 })} />
                    {errors.username && <span>This field is required</span>}
                </div>
                <div>
                    <label>Password</label>
                    <input {...register("password", { required: true, maxLength: 100 })} type="password" />
                    {errors.password && <span>This field is required</span>}
                </div>
                
                <input type="submit" value="Signup" />
            </form>
        </>
    )
}