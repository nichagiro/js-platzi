import React from 'react'

const CardHentai = ({ src }) => {
    const handleClick = async () => {
        try {
            await navigator.share({ title: "Example Page", url: src });
        } catch ({ message }) {
            console.error("Share failed:", message);
        }
    }

    return (
        <img
            src={src}
            className="rounded m-2" alt={src}
            style={{ height: '250px', width: '250px' }}
            onClick={() => handleClick()}
        />
    )
}

export default CardHentai