const validationFileData = function (array) {
  const msgArray = [];
  let errorTxt = "";

  array.map((e, index) => {
    let hasMissingData = Object.values(e).some((e) => e === "");
    let dateFrom = new Date(e.dateFrom);
    let dateTo = new Date(e.dateTo);
    let checkForNullDate = e.dateTo === "NULL";
    if (hasMissingData) {
      errorTxt = `Missing data on row: ${index + 1}`;
      msgArray.push(errorTxt);
    }
    if (!checkForNullDate && (isNaN(dateFrom) || isNaN(dateTo))) {
      errorTxt = `Wrong date format on row: ${index + 1}`;
      msgArray.push(errorTxt);
    }
  });
  return msgArray;
};

export { validationFileData };
