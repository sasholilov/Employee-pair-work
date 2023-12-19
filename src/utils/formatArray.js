const convertDateData = function (value) {
  if (value !== "NULL") {
    const tempArr = value.split(/[.\-]/);
    const convertedString = tempArr
      .map((b, index) => {
        if (index === 2) {
          return b.slice(0, 4);
        }
        return b;
      })
      .join("-")
      .trim();
    const year = convertedString.split("-")[2];
    const month = convertedString.split("-")[1];
    const day = convertedString.split("-")[0];
    const formatedDateString = `${day}-${month}-${year}`;
    console.log("convertedString", formatedDateString);
    console.log("formatedDateString", formatedDateString);
    console.log("tempArr", tempArr);
    return new Date(formatedDateString);
  } else return "NULL";
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
