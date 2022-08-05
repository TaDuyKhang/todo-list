import "../css/ListTask.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/features/slice.js";
import Form from "./Form.jsx";
import Item from "./Item.jsx";

export default function ListTask({ data }) {
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    console.log(data);
    dispatch(updateTask(data));
  };

  const handleDetail = (id) => {
    if (detail?.some((element) => element === id)) {
      setDetail(detail?.filter((element) => element !== id));
    } else {
      setDetail([...detail, id]);
    }
  };

  return (
    <div className="list-task">
      {data?.map((item, index) => (
        <div key={item.id}>
          <Item item={item} handleDetail={handleDetail} />

          <div
            className={
              detail?.some((element) => element === item.id)
                ? "active"
                : "unActive"
            }
          >
            <Form data={item} handleSubmitForm={handleSubmitForm} />
          </div>
        </div>
      ))}
    </div>
  );
}
