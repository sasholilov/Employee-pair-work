import { formatArray } from "./formatArray";

const splitStringToArray = function (string) {
  const dataArr = formatArray(
    string.split(/(\r\n|\r|\n)/g).filter((value) => value.length > 2)
  );
  return dataArr;
};

export { splitStringToArray };
