import "../css/ListTask.scss";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/features/slice.js";
import Form from "./Form.jsx";
import List from "./List.jsx";

export default function ListTask({ data }) {
  const initialDetail = () => {
    const clone = [];
    for (let i = 0; i < data.length; i++) {
      clone.push(false);
    }
    return clone;
  };
  const [detail, setDetail] = useState(initialDetail());
  const dispatch = useDispatch();
  const handleSubmitForm = (data) => {
    console.log(data);
    dispatch(updateTask(data));
  };

  const handleDetail = (index) => {
    const clone = [...detail];
    clone.splice(index, 1, !detail[index]);
    setDetail(clone);
  };

  useEffect(() => {
    console.log(detail);
  }, [detail]);

  return (
    <div className="list-task">
      {data.map((item, index) => (
        <div key={index}>
          <List item={item} index={index} handleDetail={handleDetail} />

          <div className={detail[index] ? "active" : "unActive"}>
            <Form
              data={item}
              handleSubmitForm={handleSubmitForm}
              index={index}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
