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
    const [newDisplayName, setNewDisplayName] = useState(user.displayName);
    const { error, isPending, updateLoginDetails, deleteUser } = useUpdateUser();

    const handleSubmit = (e) => {
        e.preventDefault();
        updateLoginDetails(newEmail, newPassword, newDisplayName);
    }

    const handleDelete = (e) => {
        e.preventDefault();
        deleteUser();
    }

    return (
        <div className="background">

            <div className="text">
                <h2 className={styles.title}>My Account</h2>
                <div className={styles.account}>
                    <form onSubmit={handleSubmit} className={styles.details}>
                        <label>
                            <span>Username:</span>
                            <input
                                type="text"
                                onChange={(e) => setNewDisplayName(e.target.value)}
                                value={newDisplayName}
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
                    <form onSubmit={handleDelete}>
                        {!isPending && <button type="submit" className="btn">Delete Account</button>}
                        {isPending && <button className="btn" disabled>Loading</button>}
                    </form>
                </div>
            </div>

            <img
                src={AccountImage}
                alt="ferrari"
            />
        </div>
    );
}

export default Account;