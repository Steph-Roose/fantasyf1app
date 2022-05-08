import React from 'react';

import styles from './DriverCards.module.css';

function DriverCards({ driver, image, handleSelection }) {
    return (
        <li>
            <input
                type="checkbox"
                id={driver.id}
                onChange={handleSelection}
            />
            <label className={styles.card} htmlFor={driver.id} key={driver.teamID}>
                <span className={styles.image}>{image}</span>
                <span className={styles.name} id={driver.teamID}>{driver.lastname}</span>
                <span className={styles.cost} id={driver.teamID}>{driver.cost}</span>
            </label>
        </li>
    );
}

export default DriverCards;