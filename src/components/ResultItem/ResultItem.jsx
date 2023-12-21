import "./ResultItem.css";
import eployeeIcon from "./images/icon-employee.png";

function ResultItem({ data }) {
  const { totalWorkingDays, employeeOne, employeeTwo, commonProjects } = data;
  return (
    <div className="result-item">
      <div className="section-employee">
        <p>Pair employees</p>
        <div className="icon-wrapper">
          <div className="icon-wrapper-one">
            <img src={eployeeIcon} />
            <span className="employee-id">ID: {employeeOne}</span>
          </div>
          <div className="icon-wrapper-two">
            <img src={eployeeIcon} />
            <span>ID: {employeeTwo}</span>
          </div>
        </div>
      </div>
      <div className="section-projects">
        {commonProjects.map((e, index) => (
          <span
            key={index}
          >{`Project ID: ${e.id}: ${e.commonWorkingDays} days`}</span>
        ))}
      </div>
      <div className="section-totaldays">
        <p>Total days</p>
        <span>{totalWorkingDays}</span>
      </div>
    </div>
  );
}

export default ResultItem;
