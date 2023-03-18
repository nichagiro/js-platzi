import { getProviders, signIn } from "next-auth/react"
import { useEffect, useState } from "react";

export default function SignIn() {
    const [providers, setProviders] = useState([])

    useEffect(() => {
        onStart()
    })
    const onStart = async () => {
        const data = await getProviders();
        setProviders(Object.values(data))
    }
    return (
        <div className="container m-5 p-5 text-center">
            <h1>LOGIN</h1>
            {
                providers.map(({ id, name }) => (
                    <button
                        key={id}
                        onClick={() => signIn(id)}
                        type="button"
                        className="btn btn-dark mt-5"
                    >
                        {name.toLocaleUpperCase()}
                    </button>
                ))
            }
        </div>
    )
}
