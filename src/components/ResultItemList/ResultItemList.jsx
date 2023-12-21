import { useState, useEffect } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { pairEmployeWithProjects } from "../../utils/procesData";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";

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
      <div className="result-items">
        {data.length > 0 && (
          <div className="result-items-header">
            <SearchBar searchHandle={searchHandle} />
            <h2>Result</h2>
          </div>
        )}
        {searchArr.map((item, index) => (
          <ResultItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ResultItemList;
