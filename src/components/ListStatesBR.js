import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { getDataByStateBR } from "../stateClient/clientStatesBR";

const useStyles = makeStyles((theme) => ({
  listConfig: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: "75vh",
  },
}));

const ListStatesBR = () => {
  const { state, dispatch } = useStateValue();
  const classes = useStyles();

  const onChangeStateBR = (stateInitials) => {
    dispatch({
      type: "updateProperty",
      property: "selectedStateBR",
      info: stateInitials,
    });

    getDataByStateBR(stateInitials).then((result) => {
      dispatch({
        type: "updateProperty",
        property: "stateBRData",
        info: result,
      });
    });
  };

  return (
    <div className={classes.listConfig}>
      <List component="nav" aria-label="secondary mailbox folders">
        {state.statesBR &&
          state.statesBR.map((item) => (
            <ListItem
              key={item.sigla}
              button
              onClick={() => onChangeStateBR(item.sigla)}
            >
              <ListItemText
                primary={item.nome}
                // secondary={"Casos: " + item.nome}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default ListStatesBR;
