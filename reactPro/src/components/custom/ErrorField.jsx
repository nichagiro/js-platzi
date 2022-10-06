import React from 'react'

const ErrorField = ({children}) => {
    return (
        <small className="text-danger fw-bold">
            {children}
        </small>
    )
}

export default ErrorField