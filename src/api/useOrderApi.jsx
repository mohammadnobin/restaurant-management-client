import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useOrderApi = () => {
    const axiosSecure = useAxiosSecure();
    const myOrdersPromise = email =>{
        return axiosSecure.get(`/all_orders?email=${email}`)
        .then(res => res.data)
    }
    return {
        myOrdersPromise
    }
};

export default useOrderApi;