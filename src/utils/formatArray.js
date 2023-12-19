import { SEPARATORS } from "./constants";

import { convertDateData } from "./convertDateData";

const formatArray = function (array) {
  return array.map((e) => {
    const [employeeId, projectId, dateFrom, dateTo] = e.split(
      SEPARATORS.SPLITCSV
    );
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
