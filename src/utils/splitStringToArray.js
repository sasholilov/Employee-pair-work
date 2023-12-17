const splitStringToArray = function (string) {
  console.log(
    string.split(/(\r\n|\r|\n)/g).filter((value) => value.length > 2)
  );
  return string.split(/(\r\n|\r|\n)/g).filter((value) => value.length > 2);
};

export { splitStringToArray };
