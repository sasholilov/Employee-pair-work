import { convertDateData } from "./convertDateData";

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
