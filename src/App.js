import "./App.css";
import Button from "./components/Buttons/Button";
import { useState } from "react";
import { readFile } from "./utils/readFile";

function App() {
  const [data, setData] = useState([]);

  function handleFileChange(e) {
    readFile(e);
  }
  return (
    <div className="App">
      <h1>Employee pair work</h1>
      <Button
        type="file"
        text="Please upload CSV file"
        onHandleChange={handleFileChange}
      ></Button>
    </div>
  );
}

export default App;
