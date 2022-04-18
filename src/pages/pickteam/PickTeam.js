import React, {useEffect, useState} from 'react';
import DriverCards from '../../components/constructs/DriverCards/DriverCards';
import TeamCards from '../../components/constructs/TeamCards/TeamCards';

import styles from './PickTeam.module.css';

function PickTeam(props) {
    const [isChecked, setIsChecked] = useState(false);
    const [pickedTeam, setPickedTeam] = useState(null);
    const [pickedDriver1, setPickedDriver1] = useState(null);
    const [pickedDriver2, setPickedDriver2] = useState(null);


    return (
        <div className={styles['pick-team']}>
            <div className={styles['my-team']}>
                <h3>My Team</h3>
                <p>Available funds:</p>
                <p>Team: {pickedTeam && pickedTeam.name}</p>
                <p>Driver 1: {pickedDriver1 && pickedDriver1.firstname + pickedDriver1.name}</p>
                <p>Driver 2: {pickedDriver2 && pickedDriver2.firstname + pickedDriver2.name}</p>
            </div>
            <TeamCards handleTeam={handleTeam}/>
            <DriverCards />
        </div>
    );
}

export default PickTeam;