import { useFormik } from "formik";
import * as Yup from "yup";
import Moment from "moment";
import "../css/Form.scss";
import { LIST_PIORITY, DEFAULT_TODO_DATA, PIORITY } from "../config";

const validationSchema = Yup.object({
  taskName: Yup.string().required("This field is required"),
});

export default function Form({
  title,
  placeholder,
  date,
  button,
  handleSubmitForm,
  data,
  index,
}) {
  const minDate = Moment().format("YYYY-MM-DD");

  const formik = useFormik({
    initialValues: data ? { ...data } : DEFAULT_TODO_DATA,
    // {
    // initialValues: {
    //   taskName: data?.taskName || "",
    //   description: data?.description || "",
    //   date: data?.date || Moment().format("YYYY-MM-DD hh:mm:ss"),
    //   piority: data?.piority || PIORITY.normal,
    // },
    validationSchema,
    onSubmit: (values, api) => {
      const todo = {
        ...values,
        taskName: values.taskName.trim(),
        id: data?.id || new Date().valueOf(),
        checked: data?.checked || false,
      };
      // const clone = { values };
      // if (data) {
      //   clone.values.id = data.id;
      //   clone.values.checked = data.checked;
      // }
      handleSubmitForm(todo);

      if (!data) {
        api.resetForm();
      }
    },
  });

  return (
    <form
      className={data ? "form border" : "form"}
      onSubmit={formik.handleSubmit}
    >
      <p className="title">{title}</p>

      <input
        id="taskName"
        name="taskName"
        type="text"
        className={
          formik.touched.taskName && formik.errors.taskName
            ? "taskName error"
            : "taskName"
        }
        placeholder={placeholder}
        onChange={(e) => {
          const value = e.target.value.trim();
          formik.setFieldValue("taskName", value);
        }}
        value={formik.values.taskName}
      />
      {formik.touched.taskName && formik.errors.taskName ? (
        <div className="error-message">{formik.errors.taskName}</div>
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
            value={formik.values.date}
          />
        </div>
        <p>{formik.piority}</p>
        <div className="item">
          <label className="label" htmlFor="piority">
            Piority
          </label>
          <select
            name="piority"
            className="piority"
            value={formik.values.piority}
            onChange={formik.handleChange}
            style={{ display: "block" }}
          >
            {LIST_PIORITY.map((piority) => (
              <option
                key={piority.value}
                value={piority.value}
                selected={formik.piority}
              >
                {piority.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button className="button" type="submit">
        {data ? "Update" : "Add"}
      </button>
    </form>
  );
}
