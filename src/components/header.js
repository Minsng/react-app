import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';

function Header() {
    return (

    
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <h1>
                            <Link to="/" className="navbar-brand">
                               <img src={logo} alt="logo" width="50px" />
                            </Link>
                            
                        </h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <h1>
                            <Link to="/react" className="navbar-brand">
                               <img src={logo} alt="logo" width="50px" />
                            </Link>
                            
                        </h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/react/home" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/react/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/react/contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav> */}
            </>    
    );
}

export default Header;