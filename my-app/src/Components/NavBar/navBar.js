import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Shamill-logos_transparent.png';

function NavBar() {
    // State variable to control the visibility of the burger menu
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

    // Function to toggle the burger menu
    const toggleBurgerMenu = () => {
        setIsBurgerMenuOpen(!isBurgerMenuOpen);
    };

    // CSS class for dark text
    const darkTextClass = isBurgerMenuOpen ? 'has-text-dark' : 'has-text-light';

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://github.com/ShamillFazal">
                    <img src={logo} width="112" height="28" alt="Shamill GitHub" />
                </a>

                <a
                    role="button"
                    className={`navbar-burger ${isBurgerMenuOpen ? 'is-active' : ''}`}
                    aria-label="menu"
                    aria-expanded={isBurgerMenuOpen ? 'true' : 'false'}
                    onClick={toggleBurgerMenu}
                    href="#0"
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className={`navbar-menu ${isBurgerMenuOpen ? 'is-active' : ''}`}>
                <div className="navbar-start">
                    <Link to="/" className={`navbar-item ${darkTextClass}`}>
                        Home
                    </Link>

                    <Link to="/arrays" className={`navbar-item ${darkTextClass}`}>
                        Arrays
                    </Link>

                    <Link to="/functions" className={`navbar-item ${darkTextClass}`}>
                        Functions
                    </Link>

                    <Link to="/variables" className={`navbar-item ${darkTextClass}`}>
                        Variables
                    </Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a href="#0" className={`navbar-link ${darkTextClass}`}>
                            Quizzes
                        </a>

                        <div className="navbar-dropdown">
                            <Link to="/quiz-arrays" className={`navbar-item has-text-dark`}>
                                Arrays Quiz
                            </Link>
                            <Link to="/quiz-functions" className={`navbar-item has-text-dark`}>
                                Functions Quiz
                            </Link>
                            <Link to="/quiz-variables" className={`navbar-item has-text-dark`}>
                                Variables Quiz
                            </Link>
                            <hr className="navbar-divider" />
                            <a href="#0" className={`navbar-item has-text-dark`}>
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
