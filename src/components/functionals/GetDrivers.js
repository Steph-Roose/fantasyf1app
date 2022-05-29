import { useEffect, useState } from 'react';
import axios from 'axios';
import { apiConfig } from '../../config/apiconfig';

export const GetDrivers = (driverID) => {
    const [apiDriver, setApiDriver] = useState(null);

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
                const result = await axios.get(`https://api-formula-1.p.rapidapi.com/drivers?id=${driverID}`, options);

                setApiDriver(result.data.response[0]);

            } catch (err) {
                console.log(err);
            }
        }

        getData();

    }, [driverID]);

    return apiDriver
}