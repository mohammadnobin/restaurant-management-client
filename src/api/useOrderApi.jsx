// this is  all api code hare
import React from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const useOrderApi = () => {
  const axiosSecure = useAxiosSecure();
  const myOrdersPromise = (email) => {
    return axiosSecure
      .get(`/all_orders?email=${email}`)
      .then((res) => res.data);
  };
  const placeOrder = (id, orderData) => {
    return axiosSecure.post(`/order/${id}`, orderData).then((res) => res.data);
  };
  const deleteOrder = (id)=>{
    return axiosSecure.delete(`/delete_order/${id}`)
    .then(res=> res.data)
  }
  return {
    myOrdersPromise,
    placeOrder,
    deleteOrder
  };
};

export default useOrderApi;

