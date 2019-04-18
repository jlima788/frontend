import axios from 'axios';

const api = axios.create({
    baseURL: "https://app-backend-omnistack.herokuapp.com"
});

export default api;