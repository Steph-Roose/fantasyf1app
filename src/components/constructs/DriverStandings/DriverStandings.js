import React, {useEffect} from 'react';
import {GetRaces} from '../../functionals/GetRaces';

function DriverStandings(props) {
    const races = GetRaces('race');

    useEffect(() => {
        let completedRaces = races.filter(race => race.status === "Completed");

        console.log(completedRaces);
    }, [races])

    return (
        <div>

        </div>
    );
}

export default DriverStandings;