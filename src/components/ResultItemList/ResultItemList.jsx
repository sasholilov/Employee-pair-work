import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { pairEmployeWithProjects } from "../../utils/procesData";

import React from "react";

function ResultItemList({ data }) {
  const finalData = pairEmployeWithProjects(data);

  return (
    <div className="container">
      <div className="result-items">
        {finalData.length > 0 && <h2>Result</h2>}
        {finalData.map((item, index) => (
          <ResultItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ResultItemList;
