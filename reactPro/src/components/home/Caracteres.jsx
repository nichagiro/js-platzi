import React from 'react';

const Caracteres = ({ name, image, gender, species, origin, className }) => {
    return (
        <div className={className ? className.concat(' card') : 'card'} style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <small>{gender} - {species} - {origin.name}</small>
            </div>
        </div>
    )
}

export default Caracteres