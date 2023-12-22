import { DATE_PRESENT } from "./constants";

const procesDate = function (array) {
  const procesDateArray = array.map((item) => {
    if (item.dateTo === DATE_PRESENT) {
      return (item.dateTo = new Date());
    }
    item.dateTo = new Date(item.dateTo);
    item.dateFrom = new Date(item.dateFrom);
    return item;
  });
  return procesDateArray;
};

const commonProjects = function (arrayData) {
  const commonProjectsArray = [];
  const formatedArray = procesDate(arrayData);
  formatedArray.forEach((item) => {
    let tempObj = {};
    const projectIndex = commonProjectsArray.findIndex(
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
      commonProjectsArray.push(tempObj);
    } else {
      commonProjectsArray[projectIndex].employeeTwo = item.employeeId;
      commonProjectsArray[projectIndex].employeeTwoDateFrom = item.dateFrom;
      commonProjectsArray[projectIndex].employeeTwoDateTo = item.dateTo;
    }
  });
  return commonProjectsArray;
};

const pairEmployeWithProjects = function (arrayData) {
  const pairEmployeWithProjects = [];
  const commonProjectsArr = commonProjects(arrayData);
  commonProjectsArr.forEach((item) => {
    let tempObj = {};
    const calcDays = calcCommonDays(
      item.employeeOneDateFrom,
      item.employeeOneDateTo,
      item.employeeTwoDateFrom,
      item.employeeTwoDateTo
    );
    const pairEmpIndex = pairEmployeWithProjects.findIndex(
      (f) =>
        (f.employeeOne === item.employeeOne &&
          f.employeeTwo === item.employeeTwo) ||
        (f.employeeOne === item.employeeTwo &&
          f.employeeTwo === item.employeeOne)
    );
    if (pairEmpIndex === -1) {
      tempObj = {
        totalWorkingDays: calcDays,
        employeeOne: item.employeeOne,
        employeeTwo: item.employeeTwo,
        commonProjects: [
          {
            id: item.projectId,
            employeeOneDateFrom: item.employeeOneDateFrom,
            employeeOneDateTo: item.employeeOneDateTo,
            employeeTwoDateFrom: item.employeeTwoDateFrom,
            employeeTwoDateTo: item.employeeTwoDateTo,
            commonWorkingDays: calcDays,
          },
        ],
      };
      pairEmployeWithProjects.push(tempObj);
    } else {
      pairEmployeWithProjects[pairEmpIndex].commonProjects.push({
        id: item.projectId,
        employeeOneDateFrom: item.employeeOneDateFrom,
        employeeOneDateTo: item.employeeOneDateTo,
        employeeTwoDateFrom: item.employeeTwoDateFrom,
        employeeTwoDateTo: item.employeeTwoDateTo,
        commonWorkingDays: calcDays,
      });
      pairEmployeWithProjects[pairEmpIndex].totalWorkingDays =
        pairEmployeWithProjects[pairEmpIndex].commonProjects.reduce(
          (acc, item) => {
            return (acc += item.commonWorkingDays);
          },
          0
        );
    }
  });
  const finalArray = pairEmployeWithProjects.filter(
    (e) => e.commonProjects.length > 0
  );

  return finalArray.sort((a, b) => b.totalWorkingDays - a.totalWorkingDays);
};

const calcCommonDays = function (startOne, endOne, startTwo, endTwo) {
  if (endOne < startTwo || endTwo < startOne) {
    return 0;
  }

  const commonDays = Math.min(endOne, endTwo) - Math.max(startOne, startTwo);
  const resultCommonDays = Math.floor(commonDays / (24 * 60 * 60 * 1000)) + 1;
  return resultCommonDays;
};

export { pairEmployeWithProjects };
