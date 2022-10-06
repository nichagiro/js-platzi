import React from 'react';
import { Link } from "react-router-dom";
import { useStore } from '@context/App/AppProvider';

const Nav = () => {
    const { user} = useStore()
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary px-5">
            <div className="container-fluid">
                <b className="navbar-brand text-white">React Pro</b>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Link to="/home" className="nav-item">
                            <li className="nav-link active text-white">Pokedex</li>
                        </Link>
                    </ul>
                </div>
                <div className='float-end'>
                    <b className="navbar-brand text-white">{user?.email}</b>
                </div>
            </div>
        </nav>
    )
}

export default Nav