import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../../../hooks/useLogout';
import {useAuthContext} from '../../../hooks/useAuthContext';

// styles
import styles from './Navbar.module.css';

// images
import Logo from '../../../assets/formula-1.png'

function Navbar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();

    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/"><img src={Logo} alt="Home" className={styles.logo}/></Link>
                </li>

                <li><Link to="/rules">Rules</Link></li>

                {!user && (
                    <>
                        <li className={styles.push}><Link to="/login">Login</Link></li>
                        <li ><Link to="/signup">Signup</Link></li>
                    </>
                )}

                {user && (
                    <>
                        <li><Link to="/myteam">My team</Link></li>

                        <li className={styles.push}>Hello, {user.displayName}</li>
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