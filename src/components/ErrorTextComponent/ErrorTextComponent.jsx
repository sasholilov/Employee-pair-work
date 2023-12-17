import "./ErrorTextComponent.css";

import React from "react";

function ErrorTextComponent({ errorArray }) {
  return (
    <div>
      <h2>Total errors: {errorArray.length}</h2>
      <ul>
        {errorArray.map((msg) => (
          <li>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default ErrorTextComponent;
