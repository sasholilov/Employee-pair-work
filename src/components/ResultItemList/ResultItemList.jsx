import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { pairEmployeWithProjects } from "../../utils/procesData";

import React from "react";

function ResultItemList({ data }) {
  const finalData = pairEmployeWithProjects(data);
  {
    return finalData.map((item, index) => (
      <ResultItem key={index} data={item} />
    ));
  }
}

export default ResultItemList;
