import React from "react";
import { useStateValue } from "../stateCoronaFollow";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const ListItemIns = ({ name, nextStep, icon }) => {
  const { dispatch } = useStateValue();

  return (
    <ListItem
      button
      key={name}
      onClick={() =>
        dispatch({
          type: "updateProperty",
          property: "activeStep",
          info: nextStep
        })
      }
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={name} />
    </ListItem>
  );
};

export default ListItemIns;
