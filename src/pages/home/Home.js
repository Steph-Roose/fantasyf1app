import React from 'react';

// styles and images
import styles from './Home.module.css';
import HomeImage from '../../assets/split4.jpg';

function Home(props) {

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