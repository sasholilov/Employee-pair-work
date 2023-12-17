import "./Button.css";

function Button({ type, text, onHandleChange }) {
  if (type === "file") {
    return (
      <div className="btn-file">
        <h2>{text}</h2>
        <input type="file" onChange={onHandleChange} />
      </div>
    );
  }
}

export default Button;
