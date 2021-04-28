import React from "react";
import s from './FormsControls.module.css'

type TextAreaProps = {
    input: object
    meta: {
        touched: boolean
        error: boolean
    }
}

type InputProps = {
    input: object
    meta: {
        touched: boolean
        error: boolean
    }
}


export const TextArea = (props: TextAreaProps) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <textarea {...props.input} />
        <div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    </div>
}
export const Input = (props: InputProps) => {
    const hasError = props.meta.touched && props.meta.error
    return <div className={s.formControl + ' ' + (hasError ? s.error : '')}>
        <input {...props.input} />
        <div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    </div>
}