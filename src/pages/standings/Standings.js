import React, {useState} from 'react';
import { useCollection } from '../../hooks/Firestore/useCollection';

// components
import DriverStandings from '../../components/constructs/DriverStandings/DriverStandings';
import UserStandings from '../../components/constructs/UserStandings/UserStandings';

// styles and images
import styles from './Standings.module.css';
import StandingsImage from '../../assets/split2.jpg';

function Standings() {
    const [standings, setStandings] = useState(true);
    const { documents, error } = useCollection('drivers');

    const showDrivers = () => {
        setStandings(true);
    }

    const showUsers = () => {
        setStandings(false);
    }

    return (
        <div className="background">
            <div className="text">
                <h2>Standings</h2>
                <div className={styles.buttons}>
                    <button className={styles['standings-btn']} onClick={showDrivers}>Drivers</button>
                    <button className={styles['standings-btn']} onClick={showUsers}>Users</button>
                </div>

                {standings && <DriverStandings drivers={documents} />}
                {!standings && <UserStandings/>}
                {error && <p>{error}</p>}
            </div>

            <img
                src={StandingsImage}
                alt="Hamilton and Verstappen on the podium"
            />
        </div>
    );
}

export default Standings;