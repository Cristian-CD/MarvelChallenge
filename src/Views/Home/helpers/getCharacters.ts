import axios from "axios";
import md5 from 'md5';

const publicKey = 'c678f1a42d5ce860529dccf7c6eea96c';
const privateKey = '2136e4e08ab36b0f689cf1df5c7f54cf549efe08';

const ts = Date.now();

const hash = md5(ts + privateKey + publicKey);

const baseURL = 'https://gateway.marvel.com/v1/public/';


export const getCharacters = async(offset: number = 0) => {
    try {
        const response = await axios.get(`${baseURL}characters`, {
            params: {
                ts,
                apikey: publicKey,
                hash,
                offset,
                limit: 18
            },
        });
        return response.data
    } catch (error) {
        console.error('Error al obtener los personajes:', error);
        return error
    }
}



