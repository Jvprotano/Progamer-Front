import axios from 'axios'
export const http = axios.create({
    baseURL: 'https://progamerapi.azurewebsites.net/api'
});

