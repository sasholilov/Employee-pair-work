const searchByEmployeeId = function (data, searchingValue) {
  const tempArr = data.filter(
    (element) =>
      element.employeeOne.includes(searchingValue) ||
      element.employeeTwo.includes(searchingValue)
  );
  return tempArr;
};

const searchByProjectId = function (data, searchingValue) {
  const tempArr = data.filter((element) =>
    element.commonProjects.some((e) => e.id.includes(searchingValue))
  );
  return tempArr;
};

const searchByDaysMin = function (data, searchingValue) {
  const tempArr = data.filter(
    (element) => Number(element.totalWorkingDays) > Number(searchingValue)
  );

  return tempArr;
};

export { searchByEmployeeId, searchByProjectId, searchByDaysMin };
