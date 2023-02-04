import React from 'react'
import Nav from '@components/navbar/Nav'

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
        </>
    )
}

export default Layout