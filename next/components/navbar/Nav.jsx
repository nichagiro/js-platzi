import Link from 'next/link';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

const Nav = () => {
    const { t } = useTranslation();
    return (
        <Suspense fallback="loading">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary px-5">
                <div className="container-fluid">
                    <b className="navbar-brand text-white">Next Platzi!</b>
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
                        </ul>
                    </div>
                </div>
            </nav>
        </Suspense>
    )
}

export default Nav