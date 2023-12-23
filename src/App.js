import "./App.css";
import { useEffect, useState } from "react";
import { readFile } from "./utils/readFile";
import { validationFileData } from "./utils/validationFileData";
import { scrollAnimation } from "./utils/scrollAnimation";
import Header from "./components/Header/Header";
import ErrorTextComponent from "./components/ErrorTextComponent/ErrorTextComponent";
import ResultItemList from "./components/ResultItemList/ResultItemList";
import FileBar from "./components/FileBar/FileBar";
import Footer from "./components/Footer/Footer";

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
    const errorComponentEl = document.getElementById("error-component");
    scrollAnimation(resultItemListEl, errorComponentEl);
  }, [data]);

  return (
    <div className="App">
      {errorMsg.length > 0 && <ErrorTextComponent errorArray={errorMsg} />}
      <Header />
      <FileBar handleFileChange={handleFileChange} />
      {errorMsg.length === 0 && <ResultItemList data={data} />}
      <Footer />
    </div>
  );
}

export default App;
