import React from 'react';
import {GetRaces} from '../../functionals/GetRaces';

function LastRace() {
    const races = GetRaces;

    const getLastRace = () => {
        return races.lastIndexOf({status: "Completed"});
    }

    console.log(getLastRace);

    return (
        <div>

        </div>
    );
}

export default LastRace;