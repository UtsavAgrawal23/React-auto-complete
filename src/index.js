import React from "react";
import ReactDOM from "react-dom";
import AutoComplete from "./autoComplete";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Basic Autocompete</h1>
      <AutoComplete />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
