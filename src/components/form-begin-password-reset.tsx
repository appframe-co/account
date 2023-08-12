'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    email: string
}

export function FormBeginPasswordReset() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
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