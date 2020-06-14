import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import Paper from "@material-ui/core/Paper";
import ListCountries from "../components/ListCountries";
import Chip from "@material-ui/core/Chip";

import { getDeaths, getWeekDeaths } from "../stateClient/clientCountries";
import BarVis from "../chartComponents/BarVis";

import Box from "@material-ui/core/Box";
import ListStatesBR from "../components/ListStatesBR";

import { getDailyDeathsByStateBR } from "../stateClient/clientStatesBR";
import ButtonsDates from "../components/ButtonsDates";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
}));

const DeathChart = ({ dailyCases, isCountryData }) => {
  const { state } = useStateValue();
  const classes = useStyles();

  const [deaths, setDeaths] = useState([]);

  useEffect(() => {
    if (isCountryData) {
      dailyCases
        ? setDeaths(getDeaths(state.countryData, state.daysRange))
        : setDeaths(getWeekDeaths(state.countryData, state.daysRange));
    } else {
      setDeaths(getDailyDeathsByStateBR(state.stateBRData[1].data));
    }
  }, [
    state.daysRange,
    state.countryData,
    dailyCases,
    state.stateBRData,
    isCountryData,
  ]);

  return (
    <Grid container spacing={2} alignItems="center" justify="center" style={{}}>
      <Grid item sm={12} md={10}>
        <Grid container spacing={0} className={classes.root}>
          <Grid item sm={12} md={6} xs={12}>
            {isCountryData ? (
              <Chip label={state.selectedCountry} />
            ) : (
              <Chip
                label={
                  state.statesBR.find(
                    (st) => st.initials === state.selectedStateBR
                  ).name
                }
              />
            )}
          </Grid>

          <Grid item sm={12} md={6} xs={12}>
            {state.daysRange && <ButtonsDates />}
          </Grid>

          <Grid item sm={12} md={12} xs={12}>
            <Box p={1}>
              <div style={{ height: "80vh", width: "80vw" }}>
                <Paper className={classes.root} elevation={3}>
                  <BarVis data={deaths} />
                </Paper>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={12} md={2}>
        <Box>{isCountryData ? <ListCountries /> : <ListStatesBR />}</Box>
      </Grid>
    </Grid>
  );
};

export default DeathChart;
