import { useEffect, useState } from 'react';
import { apiConfig } from '../config/configapi';
import axios from 'axios';

export const useDrivers = (driverID) => {
    const [imgURL, setImgURL] = useState();
    const apiKey = apiConfig.apiKey;

    const options = {
        method: 'GET',
        url: 'https://api-formula-1.p.rapidapi.com/drivers',
        params: {id: `${driverID}`},
        headers: {
            'X-RapidAPI-Host': 'config-formula-1.p.rapidapi.com',
            'X-RapidAPI-Key': apiKey
        }
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.request(options);
                setImgURL(result.data.response[0].image)

            } catch (e) {
                console.error(e);
            }
        }

        if (driverID) {
            fetchData();
        }

    }, [driverID]);

    return { imgURL }
}