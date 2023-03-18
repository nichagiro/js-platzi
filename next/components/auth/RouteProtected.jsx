import { signIn, useSession } from 'next-auth/react'
import React from 'react'

const RouteProtected = ({ children }) => {
    const { status } = useSession()

    if (status !== "authenticated") {
        return (
            <div className='container text-center my-5'>
                <div>Autentiquese porfavor</div>
                <button
                    className='btn btn-outline btn-success my-4'
                    onClick={() => signIn()}
                >LOGIN
                </button>
            </div>
        )
    }

    return children
}

export default RouteProtected