import { useDispatch } from "react-redux";
import { removeTask } from "../store/features/slice.js";

export default function List({ item, index, handleDetail }) {
  const dispatch = useDispatch();
  const handleRemoveTask = () => {
    dispatch(removeTask(index));
  };

  return (
    <div className="task">
      <div className="text-box">
        <label className="checkbox-label" htmlFor={index}>
          <input id={index} type="checkbox" className="checkbox" />
          <p className="checkbox-p"></p>
        </label>
        <span className="task-name">{item.taskName}</span>
      </div>
      <div className="button-box">
        <button onClick={() => handleDetail(index)} className="detail">
          Detail
        </button>
        <button onClick={() => handleRemoveTask()} className="remove">
          Remove
        </button>
      </div>
    </div>
  );
}
