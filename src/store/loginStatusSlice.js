import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: null, loggedInUserId: null };

const loginStatusSlice = createSlice({
  name: "loginStatus",
  initialState,
  reducers: {
    doLogin(state, action) {
      state.isLoggedIn = true;
      localStorage.setItem("isLoggedIn", true);

      localStorage.setItem("loggedInUserId", action.payload.uid);
      state.loggedInUserId = action.payload.uid;
    },
    doLogout(state) {
      state.isLoggedIn = false;
      console.log("inside logout slice ", state.isLoggedIn);
      state.loggedInUserId = null;

      try {
        // localStorage.setItem("isLoggedIn", false);
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("loggedInUserId");
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export const loginStatusActions = loginStatusSlice.actions;
export const loginStatusReducer = loginStatusSlice.reducer;
