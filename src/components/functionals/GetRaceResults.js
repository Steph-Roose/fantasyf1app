import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiConfig } from '../../config/configapi';

export const GetRaceResults = (raceID) => {
    const [raceResults, setRaceResults] = useState([]);

    useEffect(() => {
        const apiKey = apiConfig.apiKey;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey
            }
        };

        const getData = async () => {
            try {
                const result = await axios.get(`https://api-formula-1.p.rapidapi.com/rankings/races?race=${raceID}`, options);

                setRaceResults(result.data.response);

            } catch (err) {
                console.log(err);
            }
        }

        getData();

    }, [raceID])

    return raceResults
}