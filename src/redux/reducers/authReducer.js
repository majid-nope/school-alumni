import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../async-operations/auth";

const authReducer = createSlice({
  name: "auth",
  initialState: { user: JSON.parse(localStorage.getItem("user")) },
  reducers: {
    logout: () => {
      localStorage.removeItem("user");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      console.log(action.payload);
    });
  },
});

export default authReducer.reducer;

export const {logout} = authReducer.actions
