const procesDate = function (array) {
  const newArray = array.map((item) => {
    if (item.dateTo === "NULL") {
      return (item.dateTo = new Date());
    }
    item.dateTo = new Date(item.dateTo);
    item.dateFrom = new Date(item.dateFrom);
    return item;
  });
};

const commonProjectsArray = function (arrayData) {
  const tempArray = [];
  arrayData.forEach((item) => {
    let newObj = {};
    const projectIndex = tempArray.findIndex(
      (f) => f.projectId === item.projectId
    );
    if (projectIndex === -1) {
      newObj = {
        projectId: item.projectId,
        employeeOne: item.employeeId,
        employeeOneDateFrom: item.dateFrom,
        employeeOneDateTo: item.dateTo,
        employeeTwo: "",
        employeeTwoDateFrom: "",
        employeeTwoDateTo: "",
      };
      tempArray.push(newObj);
    } else {
      tempArray[projectIndex].employeeTwo = item.employeeId;
      tempArray[projectIndex].employeeTwoDateFrom = item.dateFrom;
      tempArray[projectIndex].employeeTwoDateTo = item.dateTo;
    }
  });
  console.log("checkpoint", tempArray);
  return tempArray;
};

export { procesDate, commonProjectsArray };
