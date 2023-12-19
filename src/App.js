import "./App.css";
import Button from "./components/Buttons/Button";
import { useState } from "react";
import { readFile } from "./utils/readFile";
import { validationFileData } from "./utils/validationFileData";
import ErrorTextComponent from "./components/ErrorTextComponent/ErrorTextComponent";
import ResultItemList from "./components/ResultItemList/ResultItemList";

function App() {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);

  function handleFileChange(e) {
    readFile(e)
      .then((data) => {
        setData(data);
        const errData = validationFileData(data);
        setErrorMsg(errData);
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
      {errorMsg.length === 0 && <ResultItemList data={data} />}
      {errorMsg.length > 0 && <ErrorTextComponent errorArray={errorMsg} />}
    </div>
  );
}

export default App;
