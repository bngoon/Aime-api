import fetch from 'node-fetch'
import {promises as fsPromises} from 'fs'

const url = 'https://narutodb.xyz/api/character?page=1&limit=20';
const headers = {
    'accept': 'application/json'
};

fetch(url, { headers })
    .then(response => response.json())
    .then(data => fsPromises.writeFile("./data.json", JSON.stringify(data.characters)))
    .catch(error => console.error(error));