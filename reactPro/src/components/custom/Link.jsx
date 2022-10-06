import React from 'react'

const Link = (props) => {
    return (
        <div className={props.container}>
            <a
                href="#!"
                className={`text-decoration-none fw-bold link-${props.color} ${props.className}`}
            >
                {props.label}
            </a>
        </div>
    )
}

export default Link

Link.defaultProps = {
    href: '#!',
    color: 'dark'
}