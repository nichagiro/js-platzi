import React from 'react'

const Sppiner = ({ display }) => {
    return (
        display &&
        <div style={{ top: '50%', left: '48%', position: 'fixed' }}>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Sppiner