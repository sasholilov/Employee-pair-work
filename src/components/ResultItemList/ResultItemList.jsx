import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";

import React from "react";

function ResultItemList({ data }) {
  {
    data.map((e) => {
      <ResultItem data={e} />;
    });
  }
}

export default ResultItemList;
