import React from 'react';

// styles
import styles from './Account.module.css';
import AccountImage from '../../assets/split1.jpg';

function Account(props) {
    return (
        <div className="background">

            <div className="text">
                <h2>My Account</h2>
            </div>

            <img
                src={AccountImage}
                alt="ferrari"
            />
        </div>
    );
}

export default Account;