const procesDate = function (array) {
  const newArray = array.map((item) => {
    if (item.dateTo === "NULL") {
      return (item.dateTo = new Date());
    }
    return item;
  });
  return newArray;
};

export { procesDate };
