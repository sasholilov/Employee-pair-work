import "./Modal.css";

function Modal({ modalOpen }) {
  const handleCloseModal = function () {
    modalOpen(false);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <p>1. CSV file format.</p>
        <p>
          2. Value separator: <span className="modal-separator">;</span>
        </p>
        <p>3. Cells with no values are not allowed.</p>
        <p>
          4. If a project is still being worked on, a NULL value is recorded as
          the end date.
        </p>
        <p>5. Recognizes the following date formats:</p>
        <ul>
          <li>YYYY-mm-dd</li>
          <li>dd-mm-YYYY</li>
          <li>YYYY.mm.dd</li>
          <li>dd.mm.YYYY</li>
          <li>YYYY/mm/dd</li>
          <li>dd/mm/YYYY</li>
          <li>ddmmYYYY</li>
        </ul>
        <span className="btn-closemodal" onClick={handleCloseModal}>
          X
        </span>
      </div>
    </div>
  );
}

export default Modal;
