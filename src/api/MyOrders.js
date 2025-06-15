import axios from "axios"

export const myOrders = (email)=>{
    return axios(`${import.meta.env.VITE_API_URL}/all_orders?email=${email}`)
}