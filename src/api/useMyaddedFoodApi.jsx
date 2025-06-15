import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useMyaddedFoodApi = () => {
    const axiosSecure = useAxiosSecure()
    const myAddedFoodsPromise = email =>{
        return axiosSecure.get(`/all_foods?email=${email}`)
        .then(res => res.data)
    }
    return {
        myAddedFoodsPromise
    }
};

export default useMyaddedFoodApi;