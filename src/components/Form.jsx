import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Moment from "moment";
import "../css/Form.scss";
export default function Form({
  title,
  placeholder,
  date,
  button,
  handleSubmitForm,
}) {
  const minDate = Moment().format("YYYY-MM-DD");
  //   console.log(date);
  const formik = useFormik({
    initialValues: {
      taskName: "",
      description: "",
      date: date,
      piority: "Normal",
    },
    validationSchema: Yup.object({
      taskName: Yup.string()
        .min(1, "This field is required")
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      handleSubmitForm(values);
    },
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <p className="title">{title}</p>

      <input
        id="taskName"
        name="taskName"
        type="text"
        className="taskName"
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.taskName}
      />
      {formik.touched.taskName && formik.errors.taskName ? (
        <div>{formik.errors.taskName}</div>
      ) : null}

      <label className="label" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        name="description"
        type="text"
        className="description"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.description}
      />

      <div className="box-item">
        <div className="item">
          <label className="label" htmlFor="date">
            Due Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="date"
            min={minDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.date}
          />
        </div>
        <div className="item">
          <label className="label" htmlFor="piority">
            Piority
          </label>
          <select
            name="piority"
            defaultValue="Normal"
            className="piority"
            value={formik.piority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ display: "block" }}
          >
            <option value="Low" label="Low">
              {" "}
              Low
            </option>
            <option value="Normal" label="Normal">
              Normal
            </option>
            >
            <option value="High" label="High">
              High
            </option>
          </select>
        </div>
      </div>

      <button className="button" type="submit">
        {button}
      </button>
    </form>
  );
}
