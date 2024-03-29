import React from "react"
import styles from "./FormsControls.module.css"
import { Field } from "redux-form"

const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: " " ) } >
            <div>
                {props.children}
            </div>
            { hasError && <span> {meta.error} </span>}            
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, ...restProps} = props
    return <FormControl {...props} ><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta,  ...restProps} = props
    return <FormControl {...props} ><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props={}, text ="") => {
    return <div>
          <Field placeholder={placeholder}
                 name={name}
                 validate={validators}
                 component={component}
                 {...props} />
                 {text}
    </div>
}




/*export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: " " ) } >
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span> {meta.error} </span>}
            
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error: " " ) } >
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span> {meta.error} </span>}
            
        </div>
    )
}*/