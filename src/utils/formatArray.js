const convertDateData = function (value) {
  if (value === "NULL") {
    return "NULL";
  }

  let separator;
  if (value.includes("-")) {
    separator = "-";
  } else if (value.includes(".")) {
    separator = ".";
  }

  const tempArr = value.split(separator);
  const convertedString = tempArr
    .map((b) => b)
    .join("-")
    .trim();

  if (convertedString.split("-")[0].length > 2) {
    const year = convertedString.split("-")[0];
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

const formatArray = function (array) {
  return array.map((e) => {
    const [employeeId, projectId, dateFrom, dateTo] = e.split(";");
    const formatetedDateFrom = convertDateData(dateFrom);
    const formatetedDateTo = convertDateData(dateTo);
    return {
      employeeId,
      projectId,
      dateFrom: formatetedDateFrom,
      dateTo: formatetedDateTo,
    };
  });
};

export { formatArray };
