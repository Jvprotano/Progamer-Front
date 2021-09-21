import axios from 'axios'
const http = axios.create({
    baseURL: 'https://progamerapi.azurewebsites.net/Api'
});
export default http
