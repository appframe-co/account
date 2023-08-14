'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type Inputs = {
    email: string
}

export function FormBeginPasswordReset() {
    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/begin_password_reset', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(data)});
        const dataJson = await res.json();
        if (!dataJson.error) {
            router.push('/');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email</label>
                    <input {...register("email", {required: true})} />
                    {errors.email && <span>This field is required</span>}
                </div>
                
                <input type="submit" value="Send" />
            </form>
        </>
    )
}