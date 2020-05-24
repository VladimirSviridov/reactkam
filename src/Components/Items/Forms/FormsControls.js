import React from "react";
import c from "./FormsControls.module.css"

const FormControls = ({input, meta, elementType, ...props}) => {
    const hasError = meta.touched && meta.error;
    return <div className={c.formControl + ' ' + (hasError ? c.error : " ")}>
        <div>
            <props.typeField {...props}{...input}/>
        </div>
        {hasError && <span>{meta.error}</span>}
    </div>
};

export const Textarea = (props) => {
    return <FormControls {...props}/>
};

export const Input = (props) => {
    return <FormControls  {...props}/>
};