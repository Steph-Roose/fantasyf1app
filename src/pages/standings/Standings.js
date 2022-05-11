import React, {useEffect, useState} from 'react';

// styles and images
import StandingsImage from '../../assets/split3.jpg';
import {GetRaces} from '../../components/functionals/GetRaces';
import {GetRaceResults} from '../../components/functionals/GetRaceResults';


function Standings() {
    const races = GetRaces('race');
    const completedRaces = races.filter(race => race.status === "Completed");

    useEffect(() => {

    }, [])

    console.log(completedRaces);

    return (
        <div className="background">
            <div className="text">
                <h2>Standings</h2>

            </div>

            <img
                src={StandingsImage}
                alt="hamilton and verstappen on the podium"
            />
        </div>
    );
}

export default Standings;