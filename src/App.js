import "./App.css";
import Button from "./components/Buttons/Button";
import { useState } from "react";
import { readFile } from "./utils/readFile";

function App() {
  const [data, setData] = useState([]);

  function handleFileChange(e) {
    readFile(e)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <h1>Employee pair work</h1>
      <Button
        type="file"
        text="Please upload CSV file"
        onHandleChange={handleFileChange}
      ></Button>
      {data.map((d) => (
        <p>
          {d.employeeId}
          {" | "}
          {d.projectId}
          {" | "}
          {d.dateFrom}
          {" | "}
          {d.dateTo}
        </p>
      ))}
    </div>
  );
}

export default App;
