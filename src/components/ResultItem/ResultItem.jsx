import "./ResultItem.css";

function ResultItem({ data }) {
  return (
    <p>{`${data.employeeId}
  ${data.projectId}
  ${data.dateFrom}
  ${data.dateTo}`}</p>
  );
}

export default ResultItem;
