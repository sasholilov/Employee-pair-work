import "./Button.css";

function Button({ type, onHandleChange }) {
  if (type === "file") {
    return (
      <div className="btn-file">
        <input type="file" onChange={onHandleChange} />
      </div>
    );
  }
}

export default Button;
