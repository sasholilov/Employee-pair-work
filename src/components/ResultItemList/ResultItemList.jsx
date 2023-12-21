import { useState, useEffect } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { pairEmployeWithProjects } from "../../utils/procesData";

import React from "react";

function ResultItemList({ data }) {
  const [searchArr, setSearchArr] = useState([]);
  const [searchingValue, setSearchingValue] = useState("");
  const finalData = pairEmployeWithProjects(data);

  function searchHandle(e) {
    const value = e.target.value;
    setSearchingValue(value);
  }
  useEffect(() => {
    const tempArr = finalData.filter(
      (element) =>
        element.employeeOne.includes(searchingValue) ||
        element.employeeTwo.includes(searchingValue)
    );
    setSearchArr(tempArr);
  }, [searchArr, searchingValue]);

  return (
    <div className="container">
      <input onChange={searchHandle} type="text"></input>
      <div className="result-items">
        {searchArr.length > 0 && <h2>Result</h2>}
        {searchArr.map((item, index) => (
          <ResultItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ResultItemList;
