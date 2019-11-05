import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import GatewayCard from "./components/GatewayCard";
import SensorCardList from "./components/SensorCardList";
import RefreshFab from "./components/RefreshFab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Fab from '@material-ui/core/Fab';
import IconRefresh from '@material-ui/icons/Refresh'
function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      
      <GatewayCard />
      <SensorCardList />
      <RefreshFab />
    </div>
    
     
   
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
