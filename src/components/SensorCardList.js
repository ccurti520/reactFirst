import React from "react";
import Grid from "@material-ui/core/Grid";
import SensorCard from './SensorCard';
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography";
export default function SensorCardList() {

  return (
  <div>
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
    </div>
  );
}