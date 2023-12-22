import { useState, useEffect } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { pairEmployeWithProjects } from "../../utils/procesData";
import {
  searchByEmployeeId,
  searchByProjectId,
} from "../../utils/searchingTypes";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function ResultItemList({ data }) {
  const [searchArr, setSearchArr] = useState([]);
  const [searchValueEmp, setSearchValueEmp] = useState("");
  const [searchValuePrj, setSearchValuePrj] = useState("");
  const finalData = pairEmployeWithProjects(data);

  function searchHandleEmp(e) {
    const value = e.target.value;
    setSearchValueEmp(value);
  }
  function searchHandlePrj(e) {
    const value = e.target.value;
    setSearchValuePrj(value);
  }
  useEffect(() => {
    const tempArr = searchByEmployeeId(finalData, searchValueEmp);
    setSearchArr(tempArr);
  }, [searchValueEmp]);

  useEffect(() => {
    const tempArr = searchByProjectId(finalData, searchValuePrj);
    setSearchArr(tempArr);
  }, [searchValuePrj]);

  const resultArr = searchArr.length ? searchArr : finalData;

  return (
    <div className="container">
      <div className="result-items">
        {data.length > 0 && (
          <div className="result-items-header">
            <SearchBar searchHandle={searchHandleEmp} />
            <SearchBar searchHandle={searchHandlePrj} />
            <h2>Result</h2>
          </div>
        )}
        {resultArr.map((item, index) => (
          <ResultItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ResultItemList;
