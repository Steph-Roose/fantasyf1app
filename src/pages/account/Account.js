import React, { useState } from 'react';
import { useAuthContext } from '../../hooks/authentification/useAuthContext';
import { useUpdateUser } from '../../hooks/authentification/useUpdateUser';

// styles and images
import styles from './Account.module.css';
import AccountImage from '../../assets/split1.jpg';

function Account() {
    const { user } = useAuthContext();
    const [newEmail, setNewEmail] = useState(user.email);
    const [newPassword, setNewPassword] = useState(user.password);
    const { error, isPending, updateLoginDetails } = useUpdateUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateLoginDetails(newEmail, newPassword);
    }

    return (
        <div className="background">

            <div className="text">
                <h2 className={styles.title}>My Account</h2>
                <form onSubmit={handleSubmit} className={styles.account}>
                    <label>
                        <span>Username:</span>
                        <input
                            type="text"
                            value={user.displayName}
                            disabled
                        />
                    </label>

                    <label>
                        <span>Email:</span>
                        <input
                            type="email"
                            onChange={(e) => setNewEmail(e.target.value)}
                            value={newEmail}
                        />
                    </label>

                    <label>
                        <span>Password:</span>
                        <input
                            type="password"
                            onChange={(e) => setNewPassword(e.target.value)}
                            value={newPassword}
                            placeholder="*****"
                        />
                    </label>

                    {!isPending && <button type="submit" className="btn">Save</button>}
                    {isPending && <button className="btn" disabled>Loading</button>}
                    {error && <p>{error}</p>}
                </form>
            </div>

            <img
                src={AccountImage}
                alt="Verstappen at Zandvoort"
            />
        </div>
    );
}

export default Account;