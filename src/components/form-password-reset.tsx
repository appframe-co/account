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
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const {recoveryId, recoveryHash} = props;

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('api/password_reset', {method: 'POST',  headers: {
            'Content-Type': 'application/json',
          }, body: JSON.stringify(data)});
        const dataJson = await res.json();
        if (!dataJson.error) {
            router.push('/');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>New password</label>
                    <input {...register("password", {required: true})} type="password" />
                    {errors.password && <span>This field is required</span>}
                </div>
                <div>
                <label>Repeat new password</label>
                    <input {...register("passwordConfirmation", {required: true})} type="password" />
                    {errors.passwordConfirmation && <span>This field is required</span>}
                </div>

                <input type="hidden" {...register("recoveryId")} value={recoveryId} />
                <input type="hidden" {...register("recoveryHash")} value={recoveryHash} />

                <input type="submit" value="Confirm" />
            </form>
        </>
    )
}