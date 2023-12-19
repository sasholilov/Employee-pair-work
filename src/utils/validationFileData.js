const validationFileData = function (array) {
  const msgArray = [];
  let errorTxt = "";

  array.map((e, index) => {
    let hasMissingData = Object.values(e).some((e) => e === "");
    if (hasMissingData) {
      errorTxt = `Missing data on row: ${index}`;
      msgArray.push(errorTxt);
    }
  });
  return msgArray;
};

export { validationFileData };
