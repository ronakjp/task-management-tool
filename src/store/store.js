import { configureStore } from "@reduxjs/toolkit";
import { taskReducers } from "./taskSlice";
import { loginStatusReducer } from "./loginStatusSlice";
import { registeredUsersReducer } from "./registeredUsersSlice";

export const store = configureStore({
  reducer: {
    reducer1: taskReducers,
    reducer2: loginStatusReducer,
    reducer3: registeredUsersReducer,
  },
});
