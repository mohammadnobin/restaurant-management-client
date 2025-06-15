// import axios from "axios"

export const myOrders = (email, accessToken)=>{
    // return axios(`${import.meta.env.VITE_API_URL}/all_orders?email=${email}`)
    return fetch(`${import.meta.env.VITE_API_URL}/all_orders?email=${email}`,{
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}


