import React, {useEffect, useState} from 'react';
import {apiConfig} from '../../config/configapi';
import axios from 'axios';

function GetDrivers({ driverID }) {
    const [image, setImage] = useState(null);

    useEffect(() => {
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

        const getData = async () => {
            try {
                const result = await axios.request(options);
                setImage(result.data.response[0].image);

            } catch (e) {
                console.error(e);
            }
        }

        if (driverID) {
            getData();
        }

        console.log(image)
    },[driverID]);

    return (
        <div>
            <img src={image} alt="driver"/>
        </div>
    )
}

export default GetDrivers;