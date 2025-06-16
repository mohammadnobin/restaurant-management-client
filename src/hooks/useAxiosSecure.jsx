import React from "react";
import axios from "axios";
import UseAuth from "./UseAuth";
import Swal from "sweetalert2";
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

const useAxiosSecure = () => {
  const { user, signOutUser } = UseAuth();
  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  });

  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Good job!",
              text: "sign out user for 401 status code",
              icon: "success",
            });
          })
          .catch((err) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: err,
            });
          });
      }
      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export default useAxiosSecure;
