'use client'

import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'

type Inputs = {
    password: string;
    passwordConfirmation: string;
    recoveryId: string;
    recoveryHash: string;
}

type ComponentProps = {
    recoveryId: string;
    recoveryHash: string;
}

export const FormPasswordReset:React.FC<ComponentProps> = (props) => {
    const router = useRouter();
    const { register, handleSubmit, setError, formState: { errors } } = useForm<Inputs>();

    const {recoveryId, recoveryHash} = props;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/password_reset', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(data)});
        const dataJson = await res.json();
        if (dataJson.error) {
            setError('root', {type: 'manual', message: dataJson.description ?? ''});
            return;
        }

        router.push('/');
    };

    return (
        <>
            {errors.root && <div className='errors'>{errors.root?.message}</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'textfield' + (errors.password ? ' error': '')}>
                    <div className={'name'}>New password</div>
                    <input {...register("password", { required: true, maxLength: 100 })} type="password" className='input' />
                    {errors.password && <div className='msg'>This field is required</div>}
                </div>
                <div className={'textfield' + (errors.password ? ' error': '')}>
                    <div className={'name'}>Repeat new password</div>
                    <input {...register("passwordConfirmation", { required: true, maxLength: 100 })} type="password" className='input' />
                    {errors.password && <div className='msg'>This field is required</div>}
                </div>

                <input type="hidden" {...register("recoveryId")} value={recoveryId} />
                <input type="hidden" {...register("recoveryHash")} value={recoveryHash} />

                <button type='submit' className='button'>Confirm</button>
            </form>
        </>
    )
}