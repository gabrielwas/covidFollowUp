import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "./stateCoronaFollow";
import Paper from "@material-ui/core/Paper";
import ListCountries from "./components/ListCountries";
import MyResponsiveBar from './chartComponents/MyResponsiveBar';

import {getDeaths} from "./client"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
}));

const DeathChart = () => {
  const { state } = useStateValue();
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      style={{}}
      justify="center"
    >
      <Grid item xs={2}>
        <ListCountries />
      </Grid>

      <Grid item xs={10}>
        <div style={{ height: "85vh", width: "70vw", display: "flex" }}>
          <Paper className={classes.root} elevation={3}>
            {state.countryData && <MyResponsiveBar data={getDeaths(state.countryData)} />}
          </Paper>
        </div>
      </Grid>
    </Grid>
  );
};

export default DeathChart;
