import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/authentification/useAuthContext';
import { useDocument } from '../../../hooks/Firestore/useDocument';

// components
import MyDrivers from './MyDrivers';

// styles and images
import styles from './UserTeam.module.css';

function MyTeam() {
    const { user } = useAuthContext();
    const { document } = useDocument('users', user.uid);
    const [userTeam, setUserTeam] = useState(null);

    useEffect(() => {
        if (document) {
            setUserTeam(document.userTeam);
        }
    }, [document])

    console.log(userTeam);

    return (
        <div className={styles.userteam}>
            {!userTeam && <Link to="/pickteam">Pick Team</Link>}
            {userTeam &&
                <table className={styles.drivers}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th className={styles.points}>Points</th>
                        </tr>
                    </thead>
                    <tbody>
                    {userTeam.map(driver => {
                        return (
                            <MyDrivers
                                key={driver}
                                userDriver={driver}
                            />
                        )
                    })}
                    </tbody>
                </table>
            }
        </div>
    );
}

export default MyTeam;