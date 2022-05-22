import React, { useState } from 'react';
import { useSignup } from '../../hooks/authentification/useSignup';
import { useCollection } from '../../hooks/Firestore/useCollection';

// styles and images
import styles from './Signup.module.css';

function Signup() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkUsername, setCheckUsername] = useState(null);
    const { signup, isPending, error } = useSignup();
    const { documents } = useCollection('users');

    const handleSubmit = (e) => {
        e.preventDefault();
        documents.map(user => {
            if (displayName === user.displayName) {
                setCheckUsername('Username already taken');
                return checkUsername;
            } else if (displayName.length < 4) {
                setCheckUsername('Username should be at least 4 characters');
                return checkUsername;
            } else {
                return signup(email, password, displayName);
            }
        })
    }

    return (
        <div className="bg-image">
            <form onSubmit={handleSubmit} className={styles.signup}>
                <h2>Sign up</h2>
                <label>
                    <span>Username:</span>
                    <input
                        type="text"
                        onChange={(e) => setDisplayName(e.target.value)}
                        value={displayName}
                    />
                </label>

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

                {!isPending && <button type="submit" className="btn">Sign up</button>}
                {isPending && <button className="btn" disabled>Loading</button>}
                {checkUsername && <p>{checkUsername}</p>}
                {error && <p>{error}</p>}
            </form>
        </div>
    );
}

export default Signup;