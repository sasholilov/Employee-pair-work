import "./ResultItem.css";

function ResultItem({ data }) {
  return (
    <p>{`${data.employeesIds}
  ${data.projectId}
  ${data.dateFrom}
  ${data.dateTo}`}</p>
  );
}

export default ResultItem;
