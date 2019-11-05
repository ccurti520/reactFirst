import React from "react";
import ReactDOM from "react-dom";
import ButtonAppBar from "./components/ButtonAppBar";
import GatewayCard from "./components/GatewayCard";
import SensorCard from "./components/SensorCard";
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
      <Box m={0.5}>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          Sentinel Gateway
        </Typography>
      </Box>
      <GatewayCard />
      <Box m={0.5}>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          Rotosense Sensors
        </Typography>
      </Box>
      <Grid container alignContent="stretch" alignItems="flex-start" justify="space-around">
        <Box width={4.5/10} m={1}>
          <SensorCard/>
        </Box>
        <Box width={4.5/10} m={1}>
          <SensorCard/>
        </Box>
        <Box width={4.5/10} m={1}>
          <SensorCard/>
        </Box>
        <Box width={4.5/10} m={1}>
          <SensorCard/>
        </Box>
      </Grid>
      <RefreshFab />
    </div>
    
     
   
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
