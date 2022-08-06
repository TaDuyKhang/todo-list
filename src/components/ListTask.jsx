import "../css/ListTask.scss";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/features/slice.js";
import Form from "./Form.jsx";
import Item from "./Item.jsx";

export default function ListTask({ data }) {
  const [detailList, setDetailList] = useState([]);
  const dispatch = useDispatch();

  const handleSubmitForm = (data) => {
    dispatch(updateTask(data));
    const itemId = data.id;
    handleDetail(itemId);
  };

  const handleDetail = (id) => {
    if (detailList.includes(id)) {
      setDetailList(detailList?.filter((item) => item !== id));
    } else {
      setDetailList([...detailList, id]);
    }
  };

  return (
    <div className="list-task">
      {data?.map((item, index) => (
        <div key={item.id}>
          <Item item={item} handleDetail={handleDetail} />

          <div className={detailList.includes(item.id) ? "active" : "unActive"}>
            <Form data={item} handleSubmitForm={handleSubmitForm} />
          </div>
        </div>
      ))}
    </div>
  );
}
