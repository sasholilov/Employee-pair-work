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
        employeesIds: [item.employeeId],
        dateFrom: item.dateFrom,
        dateTo: item.dateTo,
      };
      tempArray.push(newObj);
    } else {
      tempArray[projectIndex].employeesIds.push(item.employeeId);
    }
  });
  console.log("checkpoint", tempArray);
  return tempArray;
};

export { procesDate, commonProjectsArray };
