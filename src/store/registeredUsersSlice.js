import { createSlice } from "@reduxjs/toolkit";
import { generateId, updateLocalStorageArray } from "../utils/utilFunctions";

const initialState = { users: [] };

const registeredUsers = createSlice({
  name: "users",
  initialState,
  reducers: {
    registerUserAccount(state, action) {
      const uData = action.payload;
      uData.uid = generateId("u");
      console.log("Udata ", uData);

      state.users.push(uData);
      updateLocalStorageArray(state.users, "users");
    },
    initialUserLoad(state) {
      console.log("Initial User Load is executed ");
      const tempArr = localStorage.getItem("users");
      if (tempArr) {
        //this check is neccessary because in case if local state is already upto date (>0 elements)
        // that means the local storage is already in sync to no need to do anything.
        if (state.users.length === 0) {
          const parsedArr = JSON.parse(tempArr);
          parsedArr.map((each) => state.users.push(each));
        }
      }
    },
  },
});

export const registeredUsersAction = registeredUsers.actions;
export const registeredUsersReducer = registeredUsers.reducer;
