const DATE_PRESENT = "NULL";
const SEPARATORS = {
  DASH: "-",
  DOT: ".",
  SPLITCSV: ";",
};
const SPLIT_NEW_LINE = /(\r\n|\r|\n)/g;
const ERROR_MESSAGE = {
  MISSING_DATA: "Missing data on row: ",
  WRONG_DATE_FORMAT: "Wrong date format on row: ",
};

export { DATE_PRESENT, SEPARATORS, SPLIT_NEW_LINE, ERROR_MESSAGE };
