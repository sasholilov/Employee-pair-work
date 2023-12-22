import "./App.css";
import { useEffect, useState } from "react";
import { readFile } from "./utils/readFile";
import { validationFileData } from "./utils/validationFileData";
import Header from "./components/Header/Header";
import ErrorTextComponent from "./components/ErrorTextComponent/ErrorTextComponent";
import ResultItemList from "./components/ResultItemList/ResultItemList";
import FileBar from "./components/FileBar/FileBar";

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

  useEffect(() => {
    const resultItemListEl = document.getElementById("resultItemList");
    if (resultItemListEl) {
      window.requestAnimationFrame(() => {
        resultItemListEl.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [data]);

  return (
    <div className="App">
      <Header />
      <FileBar handleFileChange={handleFileChange} />
      {errorMsg.length === 0 && <ResultItemList data={data} />}
      {errorMsg.length > 0 && <ErrorTextComponent errorArray={errorMsg} />}
    </div>
  );
}

export default App;
