import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action) {},
    editTask(state, action) {},
  },
});

export const taskActions = taskSlice.actions;
export const taskReducers = taskSlice.reducer;
