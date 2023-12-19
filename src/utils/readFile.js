import { splitStringToArray } from "./splitStringToArray";

const readFile = function (e) {
  return new Promise((resolve, reject) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = reader.result;
      const newData = splitStringToArray(data);
      console.log("newdata", newData);
      resolve(newData);
    };

    reader.onerror = function (error) {
      reject(error);
    };
  });
};

export { readFile };
