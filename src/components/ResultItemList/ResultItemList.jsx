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
    setSearchArr(finalData);
  }, [data]);

  const searchHandleEmp = function (e) {
    const value = e.target.value;
    setSearchValueEmp(value);
    setSearchValueDays("");
    setSearchValuePrj("");
  };

  const searchHandlePrj = function (e) {
    const value = e.target.value;
    setSearchValuePrj(value);
    setSearchValueEmp("");
    setSearchValueDays("");
  };

  const searchHandleDays = function (e) {
    const value = e.target.value;
    setSearchValueDays(value);
    setSearchValuePrj("");
    setSearchValueEmp("");
  };

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
    <div className="container" id="resultItemList">
      <div className="result-items">
        {data.length > 0 && (
          <div className="input-wrapper">
            <SearchBar
              placeholderTxt="Search by employee ID"
              searchHandle={searchHandleEmp}
              value={searchValueEmp}
            />
            <SearchBar
              placeholderTxt="Search by project ID"
              searchHandle={searchHandlePrj}
              value={searchValuePrj}
            />
            <SearchBar
              placeholderTxt="Minimun total working days"
              searchHandle={searchHandleDays}
              value={searchValueDays}
            />
          </div>
        )}
        {searchArr.map((item, index) => (
          <ResultItem key={index} data={item} />
        ))}
        {!data.length ? (
          <h2>No data file loaded</h2>
        ) : (
          !searchArr.length && <h2 className="no-result">No results to show</h2>
        )}
      </div>
    </div>
  );
}

export default ResultItemList;
