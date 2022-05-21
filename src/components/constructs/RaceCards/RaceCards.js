import React from 'react';

// styles and images
import styles from './RaceCards.module.css';

function RaceCards({ race }) {

    const getRaceWeekend = () => {
        const lastRaceDay = new Date(race.date);
        const firstRaceDay = new Date(race.date);
        const options = { month: 'short', day: 'numeric' };

        firstRaceDay.setDate(firstRaceDay.getDate() - 2);

        return firstRaceDay.toLocaleDateString('en-NL', options) + " - " + lastRaceDay.toLocaleDateString('en-NL', options);
    }

    return (
        <>
            <li className={styles.card}>
                <img src={race.circuit.image} alt="circuit"/>
                <h3>{race.competition.name}</h3>
                <p>{getRaceWeekend()}</p>
                <p>Location: <span>{race.competition.location.city}, {race.competition.location.country}</span></p>
                <p>Circuit: <span>{race.circuit.name}</span></p>
                {race.status === "Completed" && <div className={styles.overlay}> </div>}
            </li>
        </>
    );
}

export default RaceCards;