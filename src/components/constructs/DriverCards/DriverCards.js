import React from 'react';
import {GetDrivers} from '../../functionals/GetDrivers';

// styles and images
import styles from './DriverCards.module.css';

function DriverCards({ value, driver, handleSelection }) {
    const apiDriver = GetDrivers(driver.driverID);

    return (
        <li>
            <input
                type="checkbox"
                id={driver.id}
                value={value}
                onChange={handleSelection}
            />
            <label className={styles.card} htmlFor={driver.id} key={driver.teamID}>
                <span className={styles.image}>{apiDriver && <img src={apiDriver.image} alt="driver" className={styles.image}/>}</span>
                <span className={styles.name} id={driver.teamID}>{driver.lastname}</span>
                <span className={styles.cost} id={driver.teamID}>{driver.cost}</span>
            </label>
        </li>
    );
}

export default DriverCards;