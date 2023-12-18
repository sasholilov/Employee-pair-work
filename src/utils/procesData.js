const procesDate = function (array) {
  array.forEach((item) => {
    if (item.dateTo === "NULL") {
      return (item.dateTo = new Date());
    }
    item.dateTo = new Date(item.dateTo);
    item.dateFrom = new Date(item.dateFrom);
    return item;
  });
};

const commonProjects = function (arrayData) {
  const tempArray = [];
  arrayData.forEach((item) => {
    let tempObj = {};
    const projectIndex = tempArray.findIndex(
      (f) => f.projectId === item.projectId
    );
    if (projectIndex === -1) {
      tempObj = {
        projectId: item.projectId,
        employeeOne: item.employeeId,
        employeeOneDateFrom: item.dateFrom,
        employeeOneDateTo: item.dateTo,
        employeeTwo: "",
        employeeTwoDateFrom: "",
        employeeTwoDateTo: "",
      };
      tempArray.push(tempObj);
    } else {
      tempArray[projectIndex].employeeTwo = item.employeeId;
      tempArray[projectIndex].employeeTwoDateFrom = item.dateFrom;
      tempArray[projectIndex].employeeTwoDateTo = item.dateTo;
    }
  });
  return tempArray;
};

const pairEmployeWithProjects = function (arrayData) {
  const tempArray = [];
  const commonProjectsArr = commonProjects(arrayData);
  commonProjectsArr.forEach((item) => {
    let tempObj = {};
    const pairEmpIndex = tempArray.findIndex(
      (f) =>
        (f.employeeOne === item.employeeOne &&
          f.employeeTwo === item.employeeTwo) ||
        (f.employeeOne === item.employeeTwo &&
          f.employeeTwo === item.employeeOne)
    );
    if (pairEmpIndex === -1) {
      tempObj = {
        employeeOne: item.employeeOne,
        employeeTwo: item.employeeTwo,
        commonProjects: [
          {
            id: item.projectId,
            employeeOneDateFrom: item.employeeOneDateFrom,
            employeeOneDateTo: item.employeeOneDateTo,
            employeeTwoDateFrom: item.employeeTwoDateFrom,
            employeeTwoDateTo: item.employeeTwoDateTo,
            commonWorkingDays: calcCommonDays(
              item.employeeOneDateFrom,
              item.employeeOneDateTo,
              item.employeeTwoDateFrom,
              item.employeeTwoDateTo
            ),
          },
        ],
      };
      tempArray.push(tempObj);
    } else {
      tempArray[pairEmpIndex].commonProjects.push({
        id: item.projectId,
        employeeOneDateFrom: item.employeeOneDateFrom,
        employeeOneDateTo: item.employeeOneDateTo,
        employeeTwoDateFrom: item.employeeTwoDateFrom,
        employeeTwoDateTo: item.employeeTwoDateTo,
        commonWorkingDays: calcCommonDays(
          item.employeeOneDateFrom,
          item.employeeOneDateTo,
          item.employeeTwoDateFrom,
          item.employeeTwoDateTo
        ),
      });
    }
    console.log(
      calcCommonDays(
        item.employeeOneDateFrom,
        item.employeeOneDateTo,
        item.employeeTwoDateFrom,
        item.employeeTwoDateTo
      )
    );
  });
  const finalArray = tempArray.filter((e) => e.commonProjects.length > 1);
  console.log(finalArray);

  return finalArray;
};

const calcCommonDays = function (startOne, endOne, startTwo, endTwo) {
  if (endOne < startTwo || endTwo < startOne) {
    return 0;
  }

  const commonDays = Math.min(endOne, endTwo) - Math.max(startOne, startTwo);
  return Math.floor(commonDays / (24 * 60 * 60 * 1000)) + 1;
};

export { procesDate, commonProjects, pairEmployeWithProjects };
