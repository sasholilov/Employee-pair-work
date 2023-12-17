const readFile = function (e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = function () {
    const data = reader.result;
  };
};

export { readFile };
