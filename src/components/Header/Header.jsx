import "./Header.css";
import Button from "../Buttons/Button";

function Header({ onHandleChange }) {
  return (
    <header>
      <div className="container">
        <h1>Employee pair work</h1>
        <Button
          type="file"
          text="Please upload CSV file"
          onHandleChange={onHandleChange}
        ></Button>
      </div>
    </header>
  );
}

export default Header;
