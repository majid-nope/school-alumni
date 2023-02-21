import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";

// const reducer = combineReducers({ });

export const store = configureStore({ reducer: { authReducer, userReducer } });
