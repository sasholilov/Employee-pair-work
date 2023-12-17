const validationFileData = function (array) {
  const msgArray = [];
  let errorTxt = "";

  array.map((e, index) => {
    let hasError = Object.values(e).some((e) => e === "");
    if (hasError) {
      errorTxt = `Ivalid data on row: ${index}`;
      msgArray.push(errorTxt);
    }
  });
  console.log(msgArray);
  return msgArray;
};

export { validationFileData };
