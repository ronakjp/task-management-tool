import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };
//counter for the ID field temporary solution [has to be removed]
var counter = 1;
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const uData = action.payload;
      uData.id = counter;
      counter += 1;
      state.tasks.push(uData);
    },
    deleteTask(state, action) {
      const index = state.tasks.indexOf((each) => {
        return each.id === action.payload;
      });

      state.tasks.splice(index, 1);
    },
    editTask(state, action) {},
  },
});

export const taskActions = taskSlice.actions;
export const taskReducers = taskSlice.reducer;
