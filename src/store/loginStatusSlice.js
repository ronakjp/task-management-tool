import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: null };

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    doLogin(state, action) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);
    },
    doLogout(state, action) {
      state.isLoggedIn = false;
      console.log("inside logout slice ", state.isLoggedIn);

      try {
        // localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("isLoggedIn");
      } catch (e) {
        console.log("thrown error");
      }
    },
  },
});

export const loginStatusActions = loginStatusSlice.actions;
export const loginStatusReducer = loginStatusSlice.reducer;
