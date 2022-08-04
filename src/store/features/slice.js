import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    taskList: [],
  },
  reducers: {
    addNewTask: (state, action) => {
      state.taskList.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewTask } = todoList.actions;

export default todoList.reducer;
