import { createSlice } from "@reduxjs/toolkit";

export const todoList = createSlice({
  name: "todoList",
  initialState: {
    taskList: [
      {
        taskName: "Do homework",
        description: "Lorem ipsum...",
        date: "2023-06-26",
        piority: "Normal",
        id: "000",
        checked: true,
      },
      {
        taskName: "Do housework",
        description: "Do housework",
        date: "2023-07-04",
        piority: "High",
        id: "001",
        checked: false,
      },
      {
        taskName: "Learn something",
        description: "Learn something",
        date: "2023-07-10",
        piority: "Low",
        id: "002",
        checked: false,
      },
    ],
  },
  reducers: {
    addNewTask: (state, action) => {
      state.taskList.push(action.payload);
      state.taskList.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
    },

    removeTask: (state, action) => {
      state.taskList = state.taskList.filter(
        (item, index) => item.id !== action.payload
      );
    },
    updateTask: (state, action) => {
      const todo = action.payload;
      const todoIndex = state.taskList.findIndex((item) => item.id === todo.id);
      state.taskList[todoIndex] = todo;
      state.taskList.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
    },

    setCheckbox: (state, action) => {
      state.taskList = state.taskList.map((value, index) => {
        if (value.id === action.payload.id) {
          value.checked = action.payload.checked;
        }
        return value;
      });
    },

    bulkActionRemote: (state, action) => {
      state.taskList = state.taskList.filter(
        (item, index) => item.checked !== true
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewTask,
  removeTask,
  updateTask,
  setCheckbox,
  bulkActionRemote,
} = todoList.actions;

export default todoList.reducer;
