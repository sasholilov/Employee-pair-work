import { splitStringToArray } from "./splitStringToArray";
import { ERROR_MESSAGE } from "./constants";

const readFile = function (e) {
  return new Promise((resolve, reject) => {
    const file = e.target.files[0];
    if (!file) {
      reject(ERROR_MESSAGE.NO_FILE);
      return;
    }

    const isFileTypeCsv =
      file.type === "application/vnd.ms-excel" ||
      file.type === "application/csv" ||
      file.type === "text/csv";

    if (!isFileTypeCsv) {
      reject(ERROR_MESSAGE.NOT_CSV_FILE);
      return;
    }

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = reader.result;
      const newData = splitStringToArray(data);
      resolve(newData);
    };

    reader.onerror = function (error) {
      reject(error);
    };
  });
};

export { readFile };
