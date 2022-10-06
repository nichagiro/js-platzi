import React from 'react'
import Nav from '@components/Layouts/Nav'

const Index = (props ) => {
    return (
        <div>
            <Nav />
            {props.children}
        </div>
    )
}

export default Index