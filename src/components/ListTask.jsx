import "../css/ListTask.scss";
import { useDispatch } from "react-redux";
import { removeTask } from "../store/features/slice.js";

export default function ListTask({ data }) {
  console.log(data);
  const dispatch = useDispatch();

  return (
    <div className="list-task">
      {data.map((item, index) => (
        <div className="item" key={index}>
          <div className="text-box">
            <label className="checkbox-label" htmlFor={index}>
              <input id={index} type="checkbox" className="checkbox" />
              <p className="checkbox-p"></p>
            </label>
            <span className="task-name">{item.taskName}</span>
          </div>
          <div className="button-box">
            <button className="detail">Detail</button>
            <button
              onClick={() => dispatch(removeTask(index))}
              className="remove"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
