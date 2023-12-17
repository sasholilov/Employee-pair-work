import ResultItem from "../ResultItem/ResultItem";
import "./ResultItemList.css";
import { procesDate } from "../../utils/procesDate";

import React from "react";

function ResultItemList({ data }) {
  procesDate(data);

  {
    return data.map((item) => <ResultItem data={item} />);
  }
}

export default ResultItemList;
