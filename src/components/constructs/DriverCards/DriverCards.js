import React from 'react';

import styles from './DriverCards.module.css';
import {useDrivers} from '../../../hooks/useDrivers';

function DriverCards({ cost, value, driver, handleOnChange }) {
    const { imgURL } = useDrivers(driver.driverID);

    const image = {imgURL};
    const id = driver.teamID;

    return (
            <li>
                <input
                    type="checkbox"
                    id={driver.id}
                    value={value}
                    onChange={handleOnChange}
                />
                <label className={styles.card} htmlFor={driver.id} key={id}>
                    <span><img src={imgURL} alt="driver" className={styles.image}/></span>
                    {image && (<span className={styles.team} id={id}>{driver.lastname}</span>)}
                    <span className={styles.cost} id={id}>{cost}</span>
                </label>
            </li>
    );
}

export default DriverCards;