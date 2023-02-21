import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "../async-operations/auth";

const authReducer = createSlice({
  name: "auth",
  initialState: { user: {} },
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      console.log(action.payload);
    });
  },
});

export default authReducer.reducer;
