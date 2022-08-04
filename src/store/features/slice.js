import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    taskList: [
      {
        taskName: "Do homework",
        description: "Lorem ipsum...",
        date: "2022-08-04",
        piority: "Normal",
      },
      {
        taskName: "Do housework",
        description: "Do housework",
        date: "2022-08-04",
        piority: "High",
      },
      {
        taskName: "Learn something",
        description: "Learn something",
        date: "2022-08-04",
        piority: "Low",
      },
    ],
  },
  reducers: {
    addNewTask: (state, action) => {
      state.taskList.push(action.payload);
    },
    removeTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (item, index) => index !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewTask, removeTask } = todoList.actions;

export default todoList.reducer;
