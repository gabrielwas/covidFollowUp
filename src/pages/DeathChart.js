import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import Paper from "@material-ui/core/Paper";
import ListCountries from "../components/ListCountries";
import Chip from "@material-ui/core/Chip";

import { getDeaths } from "../stateClient/client";
import BarVis from "../chartComponents/BarVis";

import Box from "@material-ui/core/Box";
import SliderDates from "../components/SliderDates";


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
    <Grid container spacing={2} alignItems="center" justify="center" style={{}}>
      <Grid item sm={12} md={10}>
        <Grid container spacing={0} className={classes.root}>
          <Grid item sm={12} md={6}>
            <Chip label={state.selectedCountry} />
          </Grid>

          <Grid item sm={12} md={6}>
            {state.daysRange && <SliderDates />}
          </Grid>

          <Grid item sm={12} md={12}>
            <Box p={1}>
              <div style={{ height: "80vh", width: "80vw" }}>
                <Paper className={classes.root} elevation={3}>
                  {state.countryData && (
                    <BarVis data={getDeaths(state.countryData)} />
                  )}
                </Paper>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={12} md={2}>
        <Box>
          <ListCountries />
        </Box>
      </Grid>
    </Grid>
  );
};

export default DeathChart;
