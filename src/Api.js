import axios from 'axios';

const api = {
    /*arrow function (função anonima)*/

    getPersonagemByName: async () => {
        const response = await axios.get ("http://rickandmortyapi.com/api/character/2");

        return response;
    }
}