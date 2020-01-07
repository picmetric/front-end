import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://picmetric-postgres.herokuapp.com/",
    withCredentials: true,
    crossDomain: true,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
