import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function GatewayCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          align="left"
        >
          Sentinel Gateway
        </Typography>
        <Typography variant="h5" component="h2" align="left">
          RGI-GW-100945
        </Typography>

        <Typography variant="caption" component="p" align="left">
          {bull} <b>data ip:</b> 192.168.5.1
        </Typography>
        <Typography variant="caption" component="p" align="left">
          {bull} <b>channel:</b> 23
        </Typography>
        <Typography variant="caption" component="p" align="left">
          {bull} <b>data :</b> 3
        </Typography>
      </CardContent>
      <CardActions align="right">
        <IconButton size="large">
          <InfoIcon />
        </IconButton>
        <IconButton size="large">
          <SettingsIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
