import Form from "./Form.jsx";
import Moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { addNewTask } from "../store/features/slice.js";

export default function Newtask() {
  const formatDate = Moment().format("YYYY-MM-DD");
  const data = useSelector((state) => state.todoList.taskList);
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    debugger;
    console.log(e);
    const cloneId = Math.floor(Math.random() * 10000);
    e.values.id = cloneId.toString();

    dispatch(addNewTask(e.values));
  };
  return (
    <div className="new-task">
      <Form
        title="New Task"
        placeholder="Add new task ..."
        date={formatDate}
        button="Add"
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}
