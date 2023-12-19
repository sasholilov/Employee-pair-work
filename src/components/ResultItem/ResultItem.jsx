import "./ResultItem.css";

function ResultItem({ data }) {
  return (
    <div>
      <p>
        {`Total working days: ${data.totalWorkingDays}, Employee One ID: ${data.employeeOne},
  Employee Two ID: ${data.employeeTwo}`}
      </p>
      {data.commonProjects.map((e, index) => (
        <p key={index}>{`Project ID: ${e.id} - ${e.commonWorkingDays} days`}</p>
      ))}
    </div>
  );
}

export default ResultItem;
