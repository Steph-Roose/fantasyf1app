import React from 'react';

// components
import LastRace from "../../components/constructs/LastRace/LastRace";
import MyTeam from '../../components/constructs/MyTeam/MyTeam';

// styles and images
import styles from './Home.module.css';
import HomeImage from '../../assets/split3.jpg';

function Home() {

    return (
        <div className="background">
            <div className="text">
                <div className={styles.top}>
                    <h2 className={styles.title}>My Team</h2>
                    <MyTeam/>
                </div>

                <div className={styles.bottom}>
                    <h2>Last Race</h2>
                    <LastRace/>
                </div>
            </div>

            <img
                src={HomeImage}
                alt="Shooey with Ricciardo, Norris, and Zak Brown"
            />
        </div>
    );
}

export default Home;