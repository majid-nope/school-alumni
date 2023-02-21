import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../apis/authApis";

export const register = createAsyncThunk("auth/register", async (data) => {
  try {
    const response = await auth.register(data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});



export const login = createAsyncThunk("auth/login", async (data) => {
    try {
      const response = await auth.login(data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  });
  

