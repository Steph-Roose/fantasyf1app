import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useLogout } from '../../../hooks/useLogout';

// styles
import styles from './Navbar.module.css';

function Navbar() {
    const { user } = AuthContext;
    const { logout } = useLogout();

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/"><img src="../../../assets/formula-1.png" alt="Home"/></Link>
                </li>

                <li><Link to="/rules">Rules</Link></li>

                {!user && (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">Signup</Link></li>
                    </>
                )}

                {user && (
                    <>
                        <li><Link to="/myteam">My team</Link></li>

                        <li>Hello, {user.displayName}</li>
                        <li>
                            <button className="btn" onClick={logout}>Logout</button>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;