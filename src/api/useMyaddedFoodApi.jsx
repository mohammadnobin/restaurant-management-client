import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useMyaddedFoodApi = () => {
  const axiosSecure = useAxiosSecure();

  const myAddedFoodsPromise = (email) => {
    return axiosSecure.get(`/my_foods?email=${email}`).then((res) => res.data);
  };
  const addFoodPromise = (newFoods) => {
    return axiosSecure.post("/add_foods", newFoods).then((res) => res.data);
  };
  const updateFoodPromise = (id, updatedFood) => {
    return axiosSecure
      .put(`/update_food/${id}`, updatedFood)
      .then((res) => res.data);
  };
  const deleteFoods = (id) =>{
    return axiosSecure.delete(`/delete_food/${id}`)
    .then(res => res.data)
  }
  return {
    myAddedFoodsPromise,
    addFoodPromise,
    updateFoodPromise,
    deleteFoods
  };
};

export default useMyaddedFoodApi;
