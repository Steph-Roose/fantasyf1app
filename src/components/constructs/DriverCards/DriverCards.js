import React from 'react';

import styles from './DriverCards.module.css';
import {useDrivers} from '../../../hooks/useDrivers';

function DriverCards({ driver }) {
    const { imgURL } = useDrivers(driver.driverID)

    return (
        <div>
            <input
                type="checkbox"
                id={driver.id}
            />
            <label className={styles.card} htmlFor={driver.id} key={driver.teamID}>
                <span><img src={imgURL} alt="driver"/></span>
                <span className={styles.team} id={driver.teamID}>{driver.lastname}</span>
                <span className={styles.cost} id={driver.teamID}>{driver.cost}</span>
            </label>
        </div>
    );
}

export default DriverCards;