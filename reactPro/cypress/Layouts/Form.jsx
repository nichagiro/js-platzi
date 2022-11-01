import React from 'react';
import '@styles/bootstrap.css';
import FormHook from '@components/custom/Form';

const Form = ({ onSubmit, schema, children }) => {
    return (
        <div className='container my-4'>
            <FormHook onSubmit={onSubmit} resolver={schema} devTool>
                {children}
            </FormHook>
        </div>
    )
}

export default Form

Form.defaultProps =  {
    onSubmit: values => console.log('submit', values),
    schema: undefined
}