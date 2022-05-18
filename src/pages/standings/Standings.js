import React, {useCallback, useEffect, useState} from 'react';

// styles and images
import StandingsImage from '../../assets/split3.jpg';
import {GetRaces} from '../../components/functionals/GetRaces';
import {useCollection} from '../../hooks/useCollection';
import DriverStandings from '../../components/constructs/DriverStandings/DriverStandings';
import UserStandings from '../../components/constructs/UserStandings/UserStandings';
import styles from '../pickteam/PickTeam.module.css';

function Standings() {
    const [standings, setStandings] = useState(true);
    const [completedRacesIDs, setCompletedRacesIDs] = useState(null);
    const {documents, error} = useCollection('drivers');
    const allRaces = GetRaces();

    const showDrivers = () => {
        setStandings(true);
    }

    const showUsers = () => {
        setStandings(false);
    }

    return (
        <div className="background">
            <div className="text">
                <h2>Fantasy Standings</h2>
                <div className={styles.buttons}>
                    <button className="btn" onClick={showDrivers}>Drivers</button>
                    <button className="btn" onClick={showUsers}>Users</button>
                </div>

                {standings && <DriverStandings drivers={documents} />}
                {!standings && <UserStandings/>}

            </div>

            <img
                src={StandingsImage}
                alt="Hamilton and Verstappen on the podium"
            />
        </div>
    );
}

export default Standings;