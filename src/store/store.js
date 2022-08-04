import { configureStore } from "@reduxjs/toolkit";
import todoList from "./features/slice";

export default configureStore({
  reducer: {
    todoList,
  },
});
