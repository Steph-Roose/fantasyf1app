import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLogout } from '../../../hooks/useLogout';
import {useAuthContext} from '../../../hooks/useAuthContext';

// styles and images
import styles from './Navbar.module.css';
import Account from '../../../assets/outline_account_circle_white_48dp.png'

function Navbar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const location = useLocation();

    return (
        <header>
            <nav className={styles.navbar}>
                <ul className={styles.menu}>
                    {user && (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/standings">Standings</Link></li>
                        </>
                    )}

                    {!user && (
                        location.pathname !== "/signup" ? <li><Link to="/signup">Sign up</Link></li> : <li><Link to="/login">Login</Link></li>
                    )}

                    <li><Link to="/rules">Rules</Link></li>
                </ul>

                {user && (
                    <ul className={styles.account}>
                        <li>
                            <button onClick={ logout } className="btn">Logout</button>
                        </li>
                        <li>
                            <Link to="/account" className={styles.logo}>
                                <img
                                    src={Account}
                                    alt="Account"
                                />
                            </Link>
                        </li>
                    </ul>
                    )}
            </nav>
        </header>
    );
}

export default Navbar;