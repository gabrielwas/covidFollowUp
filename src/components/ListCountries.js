import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import { getCountryData } from "../stateClient/client";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  listConfig: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: "85vh",
  },
}));

const ListCountries = () => {
  const { state, dispatch } = useStateValue();
  const classes = useStyles();

  const onChangeCountry = (countryName) => {
    dispatch({
      type: "updateProperty",
      property: "selectedCountry",
      info: countryName,
    });

    dispatch({
      type: "updateProperty",
      property: "countryData",
      info: getCountryData(countryName, state.allData),
    });
  };

  return (
    <div className={classes.listConfig}>
      <List component="nav" aria-label="secondary mailbox folders">
        {state.countries &&
          state.countries.map((item) => (
            <ListItem
              key={item.name}
              button
              onClick={() => onChangeCountry(item.name)}
            >
              {item.progression ? (
                <ListItemIcon>
                  <ArrowUpwardIcon style={{ color: "#ff3300" }} />
                </ListItemIcon>
              ) : (
                <ListItemIcon>
                  <ArrowDownwardIcon style={{ color: "#33cc33" }} />
                </ListItemIcon>
              )}

              <ListItemText
                primary={item.name}
                secondary={"Casos: " + item.cases.toLocaleString("pt-BR")}
              />
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default ListCountries;
