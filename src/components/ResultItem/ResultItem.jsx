import "./ResultItem.css";
import eployeeIcon from "./images/icon-employee.png";
import projectIcon from "./images/icon-project.png";

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
        <p className="project-title">Common projects</p>
        <div className="projects-container">
          {commonProjects.map((e, index) => (
            <div className="projects-wrapper">
              <img src={projectIcon} />
              <div className="prj-info">
                <p key={index}>ID: {e.id}</p>
                <p>Days: {e.commonWorkingDays}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-totaldays">
        <p>Total days</p>
        <span>{totalWorkingDays}</span>
      </div>
    </div>
  );
}

export default ResultItem;
