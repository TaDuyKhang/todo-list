import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { bulkActionRemote } from "../store/features/slice.js";
import "../css/BulkAction.scss";

export default function BulkAction(params) {
  const data = useSelector((state) => state.todoList.taskList);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const checked = data.some((element) => element.checked);
    setIsChecked(checked);
  }, [data]);

  const handleBulkActionRemote = () => {
    dispatch(bulkActionRemote());
  };

  return (
    <div className="bulk-action">
      <div className={isChecked ? "active" : "unActive"}>
        <p>Bulk Action</p>
        <div className="button-box">
          <button className="detail">Detail</button>
          <button onClick={() => handleBulkActionRemote()} className="remove">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
