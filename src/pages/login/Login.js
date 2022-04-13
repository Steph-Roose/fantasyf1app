import React, {useState} from 'react';

import styles from './Login.module.css';

function Login(props) {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password, displayName)
    }

    return (
        <div className={styles.outer}>
            <div className={styles.inner}>
                <form onSubmit={handleSubmit} className={styles.login}>
                    <h3>Login</h3>
                    <label>
                        <span>Email:</span>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>

                    {/*{!isPending && <button type="submit" className="btn">Signup</button>}*/}
                    {/*{isPending && <button className="btn" disabled>Loading</button>}*/}

                    {/*{error && <p>{error}</p>}*/}
                </form>
            </div>
        </div>
    );
}

export default Login;