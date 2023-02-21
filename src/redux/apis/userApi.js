import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig(`${process.env.REACT_APP_BASE_URL}/api/users`);

export const user = {
  one: (id) => axios.get(`/${id}`),
  all: () => axios.get("/"),
};
