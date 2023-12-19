const convertDateData = function (value) {
  let separator;
  if (value === "NULL") {
    return "NULL";
  }

  if (value.includes("-")) {
    separator = "-";
  } else if (value.includes(".")) {
    separator = ".";
  }

  if (!separator) {
    const day = value.slice(0, 2);
    const month = value.slice(2, 4);
    const year = value.slice(4, 8);
    const formatedDateString = `${year}-${month}-${day}`;
    console.log(formatedDateString);
    return formatedDateString;
  }

  const tempArr = value.split(separator);
  const convertedString = tempArr
    .map((b) => b)
    .join("-")
    .trim();

  const stringFirstItemLength = convertedString.split("-")[0].length;

  if (stringFirstItemLength > 2) {
    const year = convertedString.split("-")[0].slice(0, 4);
    const month = convertedString.split("-")[1];
    const day = convertedString.split("-")[2];
    const formatedDateString = `${year}-${month}-${day}`;
    return formatedDateString;
  } else {
    const year = convertedString.split("-")[2].slice(0, 4);
    const month = convertedString.split("-")[1];
    const day = convertedString.split("-")[0];
    const formatedDateString = `${year}-${month}-${day}`;
    return formatedDateString;
  }
};

export { convertDateData };
