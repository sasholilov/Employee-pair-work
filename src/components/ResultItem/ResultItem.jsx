import "./ResultItem.css";

function ResultItem({ data }) {
  return (
    <p>{`${d.employeeId}
  ${d.projectId}
  ${d.dateFrom}
  ${d.dateTo}`}</p>
  );
}

export default ResultItem;
