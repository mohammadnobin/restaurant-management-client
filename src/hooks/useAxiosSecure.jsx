import React from 'react';
import axios from 'axios';
import UseAuth from './UseAuth';
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    
})

const useAxiosSecure = () => {
    const {user} = UseAuth()
    axiosInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config
    })
    return axiosInstance;
};

export default useAxiosSecure;