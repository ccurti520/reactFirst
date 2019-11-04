import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import GatewayCard from "./components/GatewayCard";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <GatewayCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
