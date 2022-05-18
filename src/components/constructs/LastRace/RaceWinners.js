import React from 'react';

// styles and images
import styles from './LastRace.module.css';

function RaceWinners({ driver }) {

    return (
        <>
            <tr>
                <td className={styles.position}>{driver.position}</td>
                <td className={styles.name}>{driver.driver.name}</td>
                <td className={styles.team}>{driver.team.name}</td>
            </tr>
        </>
    );
}

export default RaceWinners;