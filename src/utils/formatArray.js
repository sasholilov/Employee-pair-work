const formatArray = function (array) {
  return array.map((e) => {
    const [employeeId, projectId, dateFrom, dateTo] = e.split(";");
    return {
      employeeId,
      projectId,
      dateFrom,
      dateTo,
    };
  });
};

export { formatArray };
