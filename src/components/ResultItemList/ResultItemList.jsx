import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";

import React from "react";

function ResultItemList({ data }) {
  {
    return data.map((item) => <ResultItem data={item} />);
  }
}

export default ResultItemList;
