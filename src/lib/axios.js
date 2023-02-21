import axios from "axios";

export const axiosConfig = (baseURL) => axios.create({ baseURL: baseURL });
