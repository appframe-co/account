'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type Inputs = {
    email: string
    password: string
}

export function FormSignup() {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/signup', {method: 'POST',  headers: {
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
                    <label>Email</label>
                    <input {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
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