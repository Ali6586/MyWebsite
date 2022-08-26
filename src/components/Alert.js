import React from 'react'

export default function Alert(props) {
    const capitiliaze = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
           props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong> {capitiliaze(props.alert.type)} : {props.alert.msg}</strong>
            </div>
    )
}
