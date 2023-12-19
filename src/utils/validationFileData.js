import { DATE_PRESENT, ERROR_MESSAGE } from "./constants";
const validationFileData = function (array) {
  const msgArray = [];
  let errorTxt = "";

  array.map((e, index) => {
    let hasMissingData = Object.values(e).some((e) => e === "");
    let dateFrom = new Date(e.dateFrom);
    let dateTo = new Date(e.dateTo);
    let checkForNullDate = e.dateTo === DATE_PRESENT;
    if (hasMissingData) {
      errorTxt = `${ERROR_MESSAGE.MISSING_DATA}${index + 1}`;
      msgArray.push(errorTxt);
    }
    if (!checkForNullDate && (isNaN(dateFrom) || isNaN(dateTo))) {
      errorTxt = `${ERROR_MESSAGE.WRONG_DATE_FORMAT}${index + 1}`;
      msgArray.push(errorTxt);
    }
  });
  return msgArray;
};

export { validationFileData };
