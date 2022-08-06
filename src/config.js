import Moment from "moment";

export const PIORITY = {
  low: "low",
  normal: "normal",
  high: "high",
};

export const LIST_PIORITY = [
  {
    label: "Low",
    value: PIORITY.low,
  },

  {
    label: "Normal",
    value: PIORITY.normal,
  },

  {
    label: "High",
    value: PIORITY.high,
  },
];

export const DEFAULT_TODO_DATA = {
  taskName: "",
  description: "",
  date: Moment().format("YYYY-MM-DD"),
  piority: PIORITY.normal,
};
