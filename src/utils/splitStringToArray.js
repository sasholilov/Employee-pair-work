import { formatArray } from "./formatArray";

const splitStringToArray = function (string) {
  const dataArr = string
    .split(/(\r\n|\r|\n)/g)
    .filter((value) => value.length > 2);
  const formatedDataArr = formatArray(dataArr);
  return formatedDataArr;
};

export { splitStringToArray };
