import React, {useEffect, useState} from 'react';
import {apiConfig} from '../../../config/configapi';

import styles from './GetDrivers.module.css';

function GetDrivers({ driverID }) {
    const [imgURL, setImgURL] = useState(null);

    useEffect(() => {
        const apiKey = apiConfig.apiKey;

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
                'X-RapidAPI-Key': apiKey
            }
        };

        fetch(`https://api-formula-1.p.rapidapi.com/drivers?id=${driverID}`, options)
            .then(response => response.json())
            .then(response => {
                setImgURL(response.response[0].image)
            })
            .catch(err => console.error(err));

    },[driverID]);

    return (
        <div>
            {imgURL && <img src={imgURL} alt="driver" className={styles.image}/>}
        </div>
    )
}

export default GetDrivers;