import React from "react";
import Fab from "@material-ui/core/Fab";
import IconRefresh from "@material-ui/icons/Refresh";

const style = {
  margin: 0,
  top: "auto",
  right: 20,
  bottom: 20,
  left: "auto",
  position: "fixed"
};

export default function RefreshFab() {
  return (
    <Fab style={style} color="primary">
      <IconRefresh fontSize="large"/>
    </Fab>
  );
}
