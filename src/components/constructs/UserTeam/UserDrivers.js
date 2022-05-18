import React, {useEffect, useState} from 'react';
import {useCollection} from '../../../hooks/useCollection';

import styles from './UserTeam.module.css';

function UserDrivers({ userDriver }) {
    const { documents, error } = useCollection('drivers');
    const [driver, setDriver] = useState(null);

    useEffect(() => {
        const getDriverDetails = () => {
            if(documents) {
                setDriver(documents.filter(driver => driver.driverID == userDriver))
            }
        }
        getDriverDetails();
    }, [documents])

    console.log(driver);

    return (
        <>
            {driver &&
                <tr>
                    <td className={styles.name}>{driver[0].firstname} {driver[0].lastname}</td>
                    <td className={styles.points}>{driver[0].points}</td>
                </tr>
            }
        </>
    );
}

export default UserDrivers;