import "./ResultItem.css";

function ResultItem({ data }) {
  return (
    <p>{`
  Employee One: ${data.employeeOne}
  Employee Two: ${data.employeeTwo}
  Project id: ${data.projectId}
  Date from Emp One: ${data.employeeOneDateFrom}
  Date to Emp One: ${data.employeeOneDateTo}
  Date from Emp Two: ${data.employeeTwoDateFrom}
  Date to Emp Two: ${data.employeeTwoDateTo}
  `}</p>
  );
}

export default ResultItem;
