import "./FileBar.css";
import { useState } from "react";
import Button from "../Buttons/Button";
import React from "react";
import Modal from "../Modal/Modal";
import fileTodownload from "../../files/Example-data.csv";

function FileBar({ handleFileChange }) {
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = function () {
    setModalOpen(true);
  };

  return (
    <div className="file-bar">
      <div className="container">
        <div className="file-bar-content">
          <h2>Upload your CSV file</h2>
          <Button type="file" onHandleChange={handleFileChange}></Button>
          <div className="file-bar-links">
            <span className="instructions" onClick={handleModalOpen}>
              Instructions
            </span>
            <a href={fileTodownload}>
              <span>Download example CSV file</span>
            </a>
            {modalOpen && <Modal modalOpen={setModalOpen} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FileBar;
