import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../apis/authApis";
import { user } from "../apis/userApi";

export const getAllUser = createAsyncThunk("user/all", async (data) => {
  try {
    const response = await user.all();
    console.log(response);
    return response.data;

  } catch (err) {
    console.log(err);
  }
});

export const getOneUser = createAsyncThunk("user/one", async (id) => {
  try {
    const response = await user.one(id);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});
