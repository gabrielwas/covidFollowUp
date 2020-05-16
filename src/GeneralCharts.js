import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "./stateCoronaFollow";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import { getCountryData } from "./client";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MyResponsiveLine from "./basicComponents/MyResponsiveLine";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  listConfig: {
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: "85vh",
    minWidth: "25vh"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GeneralCharts = () => {
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
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      style={{}}
      justify="center"
    >
      <Grid item xs={2}>
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
      </Grid>

      <Grid item xs={10}>
        <div style={{ height: "85vh", width: "70vw", display: "flex" }}>
          <Paper className={classes.root} elevation={3}>
            {state.countryData && <MyResponsiveLine data={state.countryData} />}
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default GeneralCharts;
