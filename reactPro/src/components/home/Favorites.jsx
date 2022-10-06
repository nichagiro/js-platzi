import React from 'react'

const Favorites = ({ image, id }) => {
    return (
        <img
            src={image}
            className='ms-2 rounded-circle'
            style={{ width: '4rem', height: '4rem' }}           
        />
    )
}

export default Favorites