import React, {useCallback, useEffect, useState} from 'react';

// styles and images
import styles from './Home.module.css';
import HomeImage from '../../assets/split4.jpg';
import {GetRaces} from '../../components/functionals/GetRaces';
import {GetRaceResults} from '../../components/functionals/GetRaceResults';

function Home() {
    const [lastComplRace, setLastComplRace] = useState(null);
    const races = GetRaces();

    useEffect(() => {
        const  getLastComplRace = () => {
            setLastComplRace(races.filter(race => race.status === "Completed").slice(-1).map(race => race.id));
        }
        getLastComplRace()
    }, [races])

    console.log(lastComplRace);

    const topThree = useCallback(() => {
        const raceResults = GetRaceResults(lastComplRace);
        if(raceResults) {

        }
    }, [lastComplRace])

    topThree();

    return (
        <div className="background">
            <div className="text">
                <div className={styles.top}>
                    <h2>My Team</h2>
                </div>

                <div className={styles.bottom}>
                    <h2>Last Race</h2>
                </div>
            </div>

            <img
                src={HomeImage}
                alt="shooey"
            />
        </div>
    );
}

export default Home;