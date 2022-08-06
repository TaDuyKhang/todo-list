import Form from "./Form.jsx";
import { useDispatch } from "react-redux";
import { addNewTask } from "../store/features/slice.js";
import "../css/Newtask.scss";
export default function Newtask() {
  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    dispatch(addNewTask(data));
  };

  return (
    <div className="new-task">
      <Form
        title="New Task"
        placeholder="Add new task ..."
        button="Add"
        handleSubmitForm={handleSubmitForm}
      />
    </div>
  );
}
