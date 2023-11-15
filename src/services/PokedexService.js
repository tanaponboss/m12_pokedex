import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://my-json-server.typicode.com/nutdaran/webapp-db',  // notice that it doesn't include books
    withCredentials: false,
    headers: {
        Accept: 'application/json',   // what client expect
        'Content-Type': 'application/json' // descriping our request content (none here)
    }
})

export default {
    getPokedex() { 
        return apiClient.get('/pokedex') 
    },
    getPokemon(id) {
        return apiClient.get('/pokedex/' + id)
    }
}