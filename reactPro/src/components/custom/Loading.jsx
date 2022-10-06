import React from 'react'

const styles = {
    position : 'fixed',
    top: '48%',
    left: '42%',
    zIndex: '1000',
}

const Loading = () => {
    return (
        <section style={styles}>
            <div className="spinner-grow text-primary mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info mx-1" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </section>
    )
}

export default Loading