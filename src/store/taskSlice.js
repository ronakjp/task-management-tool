import { createSlice } from "@reduxjs/toolkit";
import { generateId, updateLocalStorageArray } from "../utils/utilFunctions";

const initialState = { tasks: [] };
//counter for the ID field temporary solution [has to be removed]

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action) {
      const taskData = action.payload;
      taskData.id = generateId("t");

      state.tasks.push(taskData);
      //syncing up with local storage
      updateLocalStorageArray(state.tasks,"tasks");
    },
    deleteTask(state, action) {
      const index = state.tasks.findIndex((each) => {
        return each.id === action.payload;
      });
      //simply removing the object present at the index
      console.log("index to be deleted ", index);
      state.tasks.splice(index, 1);
      //syncing up with local storage
      updateLocalStorageArray(state.tasks,"tasks");
    },
    editTask(state, action) {
      const { id, newTaskData } = action.payload;
      //retrieving the id
      const index = state.tasks.findIndex((each) => each.id === id);
      //setting up the new edited task value obj to the object present at the index
      state.tasks[index] = newTaskData;
      //syncing up with local storage
      updateLocalStorageArray(state.tasks,"tasks");
    },

    //this action will be dispatched on every render of the view task component
    initialLoad(state) {
      console.log("Initial Load is executed ");
      const tempArr = localStorage.getItem("tasks");
      if (tempArr) {
        //this check is neccessary because in case if local state is already upto date (>0 elements)
        // that means the local storage is already in sync to no need to do anything.
        if (state.tasks.length === 0) {
          const parsedArr = JSON.parse(tempArr);
          parsedArr.map((each) => state.tasks.push(each));
        }
      }
    },
  },
});

//exporting them to be used in the components where it is needed
export const taskActions = taskSlice.actions;
export const taskReducers = taskSlice.reducer;
