import axios from 'axios';

const api = axios.create({
    baseURL: 'https://scholarshipwebsite.onrender.com',    
})

export default api;
