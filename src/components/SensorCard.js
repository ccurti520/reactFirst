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
import CardHeader from "@material-ui/core/CardHeader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import SensorIcon from "@material-ui/icons/SettingsInputSvideo";
import Icon from "@material-ui/core/Icon";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function GatewayCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container direction="column" spacing={1} justify="center">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flexStart"
        >
          <Icon gutterBottom fontSize="large">
            <SensorIcon />
          </Icon>
          <IconButton gutterBottom>
            <SettingsIcon />
          </IconButton>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item>
            <SensorNameTitle />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

function SensorNameTitle() {
  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item>
        <Typography variant="h5" component="h2" align="left">
          Sensor 12
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="subtitle2"
          color="textSecondary"
          align="left"
          gutterBottom
        >
          RotoSense Sensor
        </Typography>
      </Grid>
    </Grid>
  );
}
