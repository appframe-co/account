'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type Inputs = {
    email: string
}

export function FormBeginPasswordReset() {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/begin_password_reset', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(data)});
        const dataJson = await res.json();
        if (dataJson.error) {
            setError('root', {type: 'manual', message: dataJson.description ?? ''});
            return;
        }

        router.push('/');
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
                
                <button type='submit' className='button'>Send</button>
            </form>
        </>
    )
}