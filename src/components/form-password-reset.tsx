'use client'

import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs = {
    password: string
    passwordConfirmation: string
    recoveryId: string
    passRecoveryId: string
}

export function FormPasswordReset() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)
    }

    const recoveryId = '';
    const passRecoveryId = '';

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
                <input type="hidden" {...register("passRecoveryId")} value={passRecoveryId} />
                
                <input type="submit" value="Confirm" />
            </form>
        </>
    )
}