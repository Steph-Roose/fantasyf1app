import {apiConfig} from '../../config/configapi';
import {useEffect, useState} from 'react';
import axios from 'axios';

export const GetRaces = (raceType) => {
    const [racesList, setRacesList] = useState([]);

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
                const result = await axios.get(`https://api-formula-1.p.rapidapi.com/races?type=${raceType}&season=2022`, options);

                setRacesList(result.data.response);

            } catch (err) {
                console.log(err);
            }
        }

        getData();

    }, [raceType]);

    return racesList
}