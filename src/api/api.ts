import axios from "axios";

export const api = axios.create({
    baseURL:  'https://labs-api.testing.it-kamasutra.com/api/',
    headers: {
         'FRIEND-TOKEN': '123'
    }
});