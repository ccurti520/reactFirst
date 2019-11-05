import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box"
import "typeface-roboto";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2), 
    borderRadius: 0,
    font: "typeface-roboto",
    spacing: 2,
    
    

  }
}));

export default function GatewayCard() {
  const classes = useStyles();

  return (
  <Box width="1">
   
    <Card className={classes.root} >
     
      <Grid
        container
        direction="row"
        alignItems="flex-end"
        justify="space-between"
      >
       <GatewayNameTitle />
        <Grid item>
          <IconButton edge="start">
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>
      <DisplayGatewayInfoCard />
      
    </Card>
    </Box>
  );
}
function DisplayGatewayInfoCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Grid container direction="column">
      <Typography variant="caption" align="left">
        {bull} <b>data ip:</b> 192.168.5.1
      </Typography>

      <Typography variant="caption" align="left">
        {bull} <b>channel:</b> 23
      </Typography>

      <Typography variant="caption" align="left">
        {bull} <b>data rate:</b> 3
      </Typography>
    </Grid>
  );
}

function GatewayNameTitle() {
  return (
    <Grid item>
      <Grid container direction="column" alignItems="flex-start" padding={10}>
        <Grid item>
          <Typography
            variant="subtitle2"
            color="textSecondary"
            align="left"
            gutterBottom
          >
            Sentinel Gateway
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" component="h2" align="left">
            RGI-GW-100945
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  
  );
}
