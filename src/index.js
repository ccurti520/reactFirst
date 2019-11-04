import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import GatewayCard from "./components/GatewayCard";
import SensorCard from "./components/SensorCard";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <GatewayCard />
      <SensorCard />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
