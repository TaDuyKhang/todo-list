import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    taskList: [
      {
        taskName: "Do homework",
        description: "Lorem ipsum...",
        date: "2023-07-04",
        piority: "Normal",
      },
      {
        taskName: "Do housework",
        description: "Do housework",
        date: "2023-06-26",
        piority: "High",
      },
      {
        taskName: "Learn something",
        description: "Learn something",
        date: "2023-07-10",
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
    updateTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (item, index) => index !== action.payload.index
      );
      state.taskList.splice(action.payload.index, 0, action.payload.values);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewTask, removeTask, updateTask } = todoList.actions;

export default todoList.reducer;
