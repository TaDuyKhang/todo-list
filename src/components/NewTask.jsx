import Form from "./Form.jsx";
import Moment from "moment";
import { useDispatch } from "react-redux";
import { addNewTask } from "../store/features/slice.js";
import "../css/Newtask.scss";
export default function Newtask() {
  const formatDate = Moment().format("YYYY-MM-DD");
  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
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
