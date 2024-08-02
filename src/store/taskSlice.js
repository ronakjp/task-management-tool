import { createSlice } from "@reduxjs/toolkit";

const initialState = { tasks: [] };
//counter for the ID field temporary solution [has to be removed]
var counter = 1;
const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const taskData = action.payload;
      taskData.id = "" + counter;
      counter += 1;
      state.tasks.push(taskData);
    },
    deleteTask(state, action) {
      const index = state.tasks.findIndex((each) => {
        return each.id === action.payload;
      });
      //simply removing the object present at the index

      console.log("index to be deleted ", index);

      state.tasks.splice(index, 1);
    },
    editTask(state, action) {
      const { id, newTaskData } = action.payload;
      //retrieving the id
      const index = state.tasks.findIndex((each) => each.id === id);
      //setting up the new edited task value obj to the object present at the index
      state.tasks[index] = newTaskData;
    },
  },
});

export const taskActions = taskSlice.actions;
export const taskReducers = taskSlice.reducer;
