import React from 'react';

import styles from './DriverCards.module.css';
import {useDrivers} from '../../../hooks/useDrivers';

function DriverCards({ driver }) {
    const { imgURL } = useDrivers(driver.driverID);

    const image = {imgURL};
    const id = driver.teamID;

    return (
            <li key={driver.id}>
                <input
                    type="checkbox"
                    id={driver.id}
                    value={driver}
                />
                <label className={styles.card} htmlFor={driver.id}>
                    <span><img src={imgURL} alt="driver" className={styles.image}/></span>
                    {image && (<span className={styles.team} id={id}>{driver.lastname}</span>)}
                    <span className={styles.cost} id={id}>{driver.cost}</span>
                </label>
            </li>
    );
}

export default DriverCards;