import "./Header.css";
import pairEmployee from "./images/pair-employees.png";

function Header() {
  return (
    <header>
      <div className="container">
        <div className="header-left">
          <h1>Longest teamwork of pairs employees</h1>
          <h2>
            Show pairs of employees and the projects they worked on in days
          </h2>
        </div>
        <div className="header-right">
          <img src={pairEmployee} />
        </div>
      </div>
    </header>
  );
}

export default Header;
