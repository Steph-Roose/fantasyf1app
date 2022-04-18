import axios from "axios";
import {useState} from 'react';

// endpoint drivers
const drivers = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/drivers',
    headers: {
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        'X-RapidAPI-Key': '16d9552abfmshb406543f702fea1p16780ejsn1b6cee603795'
    }
};
// endpoint teams
const teams = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/teams',
    headers: {
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        'X-RapidAPI-Key': '16d9552abfmshb406543f702fea1p16780ejsn1b6cee603795'
    }
};
// endpoint races
const races = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/races',
    params: {competition: 'xx', type: 'yy', season: '2022'},
    headers: {
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        'X-RapidAPI-Key': '16d9552abfmshb406543f702fea1p16780ejsn1b6cee603795'
    }
};
// endpoint rankings
const rankings = {
    method: 'GET',
    url: 'https://api-formula-1.p.rapidapi.com/rankings/races',
    params: {race: '1488'},
    headers: {
        'X-RapidAPI-Host': 'api-formula-1.p.rapidapi.com',
        'X-RapidAPI-Key': '16d9552abfmshb406543f702fea1p16780ejsn1b6cee603795'
    }
}


const [options, setOptions] = useState(null);

axios.request(options).then(function (response) {
    console.log(response.data);
}).catch(function (error) {
    console.error(error);
});