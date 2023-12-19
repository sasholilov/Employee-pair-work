import { formatArray } from "./formatArray";
import { SPLIT_NEW_LINE } from "./constants";

const splitStringToArray = function (string) {
  const dataArr = string
    .split(SPLIT_NEW_LINE)
    .filter((value) => value.length > 2);
  const formatedDataArr = formatArray(dataArr);
  return formatedDataArr;
};

export { splitStringToArray };
