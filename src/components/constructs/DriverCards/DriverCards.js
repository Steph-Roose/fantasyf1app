import React from 'react';
import { useCollection } from '../../../hooks/useCollection';

import styles from '../../../pages/pickteam/PickTeam.module.css';

function DriverCards() {
    const { documents, error } = useCollection('drivers');

    let drivers = documents;

    return (
        <form>
            {error && <p>{error}</p>}
            <ul className={styles.container}>
                {drivers && drivers.sort((a, b) => b.dcost - a.dcost).map((driver) => (
                    <li key={driver.id}>
                        <input type="checkbox" id={driver.id} className={styles.input}/>
                        <label className={styles.card} htmlFor={driver.id}>
                            <span className={styles.firstname}>{driver.firstname}</span>
                            <span className={styles.name}>{driver.name}</span>
                            <span className={styles.cost}>{driver.dcost}M</span>
                        </label>
                    </li>
                ))}
            </ul>
        </form>
    );
}

export default DriverCards;