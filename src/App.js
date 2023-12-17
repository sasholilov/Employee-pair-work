import "./App.css";
import Button from "./components/Buttons/Button";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function () {
      const data = reader.result;
      console.log(data);
    };
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
