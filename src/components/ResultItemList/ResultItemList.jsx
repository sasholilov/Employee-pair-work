import { useState, useEffect } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { pairEmployeWithProjects } from "../../utils/procesData";
import {
  searchByEmployeeId,
  searchByProjectId,
  searchByDaysMin,
} from "../../utils/searchingTypes";

import React from "react";
import SearchBar from "../SearchBar/SearchBar";

function ResultItemList({ data }) {
  const [searchArr, setSearchArr] = useState([]);
  const [searchValueEmp, setSearchValueEmp] = useState("");
  const [searchValuePrj, setSearchValuePrj] = useState("");
  const [searchValueDays, setSearchValueDays] = useState("");

  const finalData = pairEmployeWithProjects(data);

  useEffect(() => {
    console.log(finalData);
    setSearchArr(finalData);
  }, [data]);

  function searchHandleEmp(e) {
    const value = e.target.value;
    setSearchValueEmp(value);
  }

  function searchHandlePrj(e) {
    const value = e.target.value;
    setSearchValuePrj(value);
  }

  function searchHandleLess(e) {
    const value = e.target.value;
    setSearchValueDays(value);
  }

  useEffect(() => {
    const tempArr = searchByEmployeeId(finalData, searchValueEmp);
    setSearchArr(tempArr);
  }, [searchValueEmp]);

  useEffect(() => {
    const tempArr = searchByProjectId(finalData, searchValuePrj);
    setSearchArr(tempArr);
  }, [searchValuePrj]);

  useEffect(() => {
    const tempArr = searchByDaysMin(finalData, searchValueDays);
    setSearchArr(tempArr);
  }, [searchValueDays]);

  return (
    <div className="container">
      <div className="result-items">
        {data.length > 0 && (
          <div className="result-items-header">
            <SearchBar searchHandle={searchHandleEmp} />
            <SearchBar searchHandle={searchHandlePrj} />
            <SearchBar searchHandle={searchHandleLess} />
          </div>
        )}
        {searchArr.map((item, index) => (
          <ResultItem key={index} data={item} />
        ))}
        {!searchArr.length && <h2>No results to show</h2>}
      </div>
    </div>
  );
}

export default ResultItemList;
