import Link from 'next/link';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSession } from "next-auth/react"
import RouteProtected from "@components/auth/RouteProtected"

const Nav = () => {
    const { t } = useTranslation();
    const { data } = useSession();

    return (
        <Suspense fallback="loading">
            {/* <RouteProtected /> */}
            <nav className="navbar navbar-expand-lg navbar-light bg-primary px-5">
                <div className="container-fluid">
                    {
                        data?.user ? (
                            <img
                                src={data?.user?.image}
                                alt={data?.user?.email}
                                style={{ width: '50px' }}
                                className="img-thumbnail rounded-circle"
                            />
                        ) : (<b className="navbar-brand text-white">Next Platzi!</b>)
                    }
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <Link href='/'>
                                <li className="nav-link active text-white">{t('inicio')}</li>
                            </Link>
                            <Link href='/user'>
                                <li className="nav-link active text-white">{t('usuarios')}</li>
                            </Link>
                            {
                                !data?.user ? (
                                    <Link href='/api/auth/signin'>
                                        <li className="nav-link active text-white">Login</li>
                                    </Link>
                                ) : (
                                    <Link href='/api/auth/signout'>
                                        <li className="nav-link active text-white">Cerrar session</li>
                                    </Link>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </Suspense>
    )
}

export default Nav


Nav.auth = true