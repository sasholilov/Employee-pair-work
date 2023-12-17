import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Buttons/Button";

function App() {
  return (
    <div className="App">
      <h1>Employee pair work</h1>
      <Button type="file" text="Please upload CSV file"></Button>
    </div>
  );
}

export default App;
