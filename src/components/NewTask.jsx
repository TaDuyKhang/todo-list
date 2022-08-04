import Form from "./Form.jsx";
import Moment from "moment";
import { useDispatch } from "react-redux";
import { addNewTask } from "../store/features/slice.js";

export default function Newtask() {
  const formatDate = Moment().format("YYYY-MM-DD");
  const dispatch = useDispatch();
  const handleSubmitForm = (e) => {
    dispatch(addNewTask(e));
  };
  return (
    <Form
      title="New Task"
      placeholder="Add new task ..."
      date={formatDate}
      button="Add"
      handleSubmitForm={handleSubmitForm}
    />
  );
}
