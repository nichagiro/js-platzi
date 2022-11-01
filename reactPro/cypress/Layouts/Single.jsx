import React from 'react';
import '@styles/bootstrap.css';

const Single = ({ children }) => {
    return (
        <div className='container my-4'>
            {children}
        </div>
    )
}

export default Single