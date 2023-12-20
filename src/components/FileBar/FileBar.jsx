import "./FileBar.css";
import Button from "../Buttons/Button";

import React from "react";

function FileBar({ handleFileChange }) {
  return (
    <div className="file-bar">
      <div className="container">
        <div className="file-bar-content">
          <h2>Upload your CSV file</h2>
          <Button type="file" onHandleChange={handleFileChange}></Button>
          <div className="file-bar-links">
            <a href="#">
              <span className="instructions">Instructions</span>
            </a>
            <a href="#">
              <span>Download example CSV file</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileBar;
