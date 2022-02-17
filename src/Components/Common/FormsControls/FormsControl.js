import React from "react";
import styles from './FormControl.module.css'

export const Textarea = ({input,meta,...props}) =>{
    return(
        <div styles={styles.formControl + " " + styles.error}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {(meta.tuched && meta.error && <span>
                'Some error'
            </span>)}

        </div>
    )
}