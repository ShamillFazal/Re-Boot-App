import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Shamill-logos_transparent.png'

function NavBar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://github.com/ShamillFazal">
                    <img src={logo} width="112" height="28" alt="Shamill GitHub" />
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>

                    <Link to="/arrays" className="navbar-item">
                        Arrays
                    </Link>

                    <Link to="/functions" className="navbar-item">
                        Functions
                    </Link>

                    <Link to="/variables" className="navbar-item">
                        Variables
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Quizzes
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                Arrays Quiz
                            </a>
                            <a className="navbar-item">
                                Functions Quiz
                            </a>
                            <a className="navbar-item">
                                Variables Quiz
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a className="button is-light">
                                Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
