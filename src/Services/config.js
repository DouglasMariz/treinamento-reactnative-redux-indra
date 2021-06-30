import axios from "axios";

const service = axios.create(
    {
        baseURL: 'https://jsonplaceholder.typicode.com'
    }
);

export default service;
