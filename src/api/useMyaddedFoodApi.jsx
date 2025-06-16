import React from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';

const useMyaddedFoodApi = () => {
    const axiosSecure = useAxiosSecure()
    const myAddedFoodsPromise = email =>{
        return axiosSecure.get(`/my_foods?email=${email}`)
        .then(res => res.data)
    }
        const addFoodPromise = (newFoods) => {
        return axiosSecure.post('/add_foods', newFoods)
            .then(res => res.data);
    };
    return {
        myAddedFoodsPromise,
        addFoodPromise
    }
};

export default useMyaddedFoodApi;