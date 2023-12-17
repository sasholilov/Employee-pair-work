const procesDate = function (array) {
  const newArray = array.map((item) => {
    if (item.dateTo === "NULL") {
      return (item.dateTo = new Date());
    }
    item.dateTo = new Date(item.dateTo);
    item.dateFrom = new Date(item.dateFrom);
    return item;
  });
  return newArray;
};

export { procesDate };
