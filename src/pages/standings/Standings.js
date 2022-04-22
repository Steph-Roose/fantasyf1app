import React from 'react';

// styles
import styles from './Standings.module.css';
import StandingsImage from '../../assets/split3.jpg';

function Standings(props) {
    return (
        <div className="background">
            <div className="text">
                <h2>Standings</h2>
            </div>

            <img
                src={StandingsImage}
                alt="hamilton and verstappen"
            />
        </div>
    );
}

export default Standings;