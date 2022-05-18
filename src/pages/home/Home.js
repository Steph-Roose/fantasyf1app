import React from 'react';

// styles and images
import styles from './Home.module.css';
import HomeImage from '../../assets/split4.jpg';
import LastRace from "../../components/constructs/LastRace/LastRace";
import UserTeam from '../../components/constructs/UserTeam/UserTeam';

function Home() {

    return (
        <div className="background">
            <div className="text">
                <div className={styles.top}>
                    <h2 className={styles.title}>My Team</h2>
                    <UserTeam/>
                </div>

                <div className={styles.bottom}>
                    <h2>Last Race</h2>
                    <LastRace/>
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