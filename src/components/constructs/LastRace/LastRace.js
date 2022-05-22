import React, { useEffect, useState } from 'react';

// components
import { GetRaces } from '../../functionals/GetRaces';
import { GetRaceResults } from "../../functionals/GetRaceResults";

// styles and images
import styles from './LastRace.module.css';

function LastRace() {
    const [lastComplRaceId, setLastComplRaceId] = useState(null);
    const [lastComplRace, setLastComplRace] = useState(null);
    const races = GetRaces();

    useEffect(() => {
        const  getLastComplRace = () => {
            setLastComplRaceId(races.filter(race => race.status === "Completed").slice(-1).map(race => race.id));
            setLastComplRace(races.filter(race => race.status === "Completed").slice(-1).find(race => race.date));
        }
        getLastComplRace()
    }, [races])

    const raceResults = GetRaceResults(lastComplRaceId);

    const getRaceDate = () => {
        if(lastComplRace) {
            const raceDate = new Date(lastComplRace.date);

            return raceDate.toDateString();
        }
    }

    return (
        <>
            {lastComplRace &&
                <div>
                    <p>{lastComplRace.competition.name}, {lastComplRace.competition.location.country}</p>
                    <p>{getRaceDate()}</p>
                </div>
            }
            <table className={styles.results}>
                <thead>
                <tr>
                    <th className={styles.position}>Pos.</th>
                    <th className={styles.name}>Name</th>
                    <th className={styles.team}>Team</th>
                </tr>
                </thead>
                <tbody>
                {raceResults && raceResults.slice(0, 3).map(driver => {
                        return (
                            <tr>
                                <td className={styles.position}>{driver.position}</td>
                                <td className={styles.name}>{driver.driver.name}</td>
                                <td className={styles.team}>{driver.team.name}</td>
                            </tr>
                        )
                })}
                </tbody>
            </table>
        </>
    )
}

export default LastRace;