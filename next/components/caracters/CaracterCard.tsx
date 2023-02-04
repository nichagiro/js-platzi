import React, { useMemo } from 'react'

type Data = {
    name: string,
    species: string,
    url: string,
    image: string,
    id: string
}

const CaracterCard = ({ name, species, image }: Data) => {

    const RenderComponent = useMemo(
        () =>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{species}</p>
                </div>
            </div>,
        [name, species, image]
    )

    return (
        RenderComponent
    )
}

export default CaracterCard