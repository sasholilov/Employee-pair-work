import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { commonProjectsArray, procesDate } from "../../utils/procesData";

import React from "react";

function ResultItemList({ data }) {
  procesDate(data);
  const finalData = commonProjectsArray(data);
  {
    return finalData.map((item) => <ResultItem data={item} />);
  }
}

export default ResultItemList;
