import React from 'react';

// components
import { GetRaces } from '../../components/functionals/GetRaces';
import RaceCards from '../../components/constructs/RaceCards/RaceCards';

import styles from './RaceCalendar.module.css';

function RaceCalendar() {
    const races = GetRaces();

    return (
        <div className="backgroundtwo">
            <div className="container">
                <h2 className={styles.title}>Race Calendar</h2>

                <ul className="cards">
                    {races && races.map(race => {
                        return (
                            <RaceCards
                                key={race.id}
                                race={race}
                            />
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default RaceCalendar;