import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: null };

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    doLogin(state) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },
    doLogout(state) {
      state.isLoggedIn = false;
      console.log("inside logout slice ", state.isLoggedIn);

      try {
        // localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("isLoggedIn");
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const loginStatusActions = loginStatusSlice.actions;
export const loginStatusReducer = loginStatusSlice.reducer;
