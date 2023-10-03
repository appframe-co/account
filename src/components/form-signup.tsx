'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type Inputs = {
    email: string
    password: string
}

export function FormSignup() {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/signup', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(data)});
        const dataJson = await res.json();
        if (dataJson.error) {
            setError('root', {type: 'manual', message: dataJson.description ?? ''});
            return;
        }

        router.refresh();
    }

    return (
        <>
            {errors.root && <div className='errors'>{errors.root?.message}</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'textfield' + (errors.email ? ' error': '')}>
                    <div className={'name'}>Email</div>
                    <input {...register("email", { required: true })} className='input' />
                    {errors.email && <div className='msg'>This field is required</div>}
                </div>
                <div className={'textfield' + (errors.password ? ' error': '')}>
                    <div className={'name'}>Password</div>
                    <input {...register("password", { required: true, maxLength: 100 })} type="password" className='input' />
                    {errors.password && <div className='msg'>This field is required</div>}
                </div>

                <button type='submit' className='button'>Create Project</button>
            </form>
        </>
    )
}