import "./ErrorTextComponent.css";

import React from "react";

function ErrorTextComponent({ errorArray }) {
  return (
    <div className="error-component" id="error-component">
      <div className="container">
        <h2>Total errors: {errorArray.length}</h2>
        <ul>
          {errorArray.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ErrorTextComponent;
