import { axiosConfig } from "../../lib/axios";

const axios = axiosConfig(`${process.env.REACT_APP_BASE_URL}/api/auth`);

export const auth = {
  register: (data) =>
    axios.post("/register", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  login: (data) => axios.post("/login", data),
  logout: () => axios.post("/logout"),
};
