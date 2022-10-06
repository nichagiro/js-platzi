import React from 'react'

const Button = (props) => {
    return (
        <div className={props.container}>
            <button
                {...props}
                className={`btn btn-${props.color} btn-lg px-3 ${props.className}`}
                type={props.type}
            >
                {props.name}
            </button>
        </div>
    )
}

export default Button

Button.defaultProps = {
    type: 'button',
    color: 'primary'
}
