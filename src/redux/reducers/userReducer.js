import { createSlice } from "@reduxjs/toolkit";

import { getAllUser, getOneUser } from "../async-operations/user";

const userReducer = createSlice({
  name: "user",
  initialState: { users: [] },
  extraReducers: (builder) => {
    builder.addCase(getAllUser.fulfilled, (state, action) => {
          state.users = action.payload;
      console.log(action.payload);
    });
    builder.addCase(getOneUser.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});

export default userReducer.reducer;
