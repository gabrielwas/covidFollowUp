import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import Paper from "@material-ui/core/Paper";
import ListCountries from "../components/ListCountries";
import Chip from "@material-ui/core/Chip";

import LineVisCountries from "../chartComponents/LineVisCountries";
import LineVisStatesBR from "../chartComponents/LineVisStatesBR";

import Box from "@material-ui/core/Box";
import SliderDates from "../components/SliderDates";
import ListStatesBR from "../components/ListStatesBR";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  card: {
    flexGrow: 1,
  },
}));

const GeneralCharts = ({ listCountries }) => {
  const { state } = useStateValue();
  const classes = useStyles();

  return (
    <Grid container spacing={2} alignItems="center" justify="center" style={{}}>
      <Grid item sm={12} md={10}>
        <Grid container spacing={0}>
          <Grid item sm={12} md={6} xs={12}>
            {listCountries && <Chip label={state.selectedCountry} />}
            {!listCountries && (
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
            {listCountries && state.daysRange && <SliderDates />}
          </Grid>

          <Grid item sm={12} md={12} xs={12}>
            <Box p={1}>
              <div style={{ height: "80vh", width: "80vw" }}>
                <Paper className={classes.root} elevation={3}>
                  {listCountries && state.countryData && (
                    <LineVisCountries data={state.countryData} />
                  )}
                  {!listCountries && state.stateBRData && (
                    <LineVisStatesBR data={state.stateBRData} />
                  )}
                </Paper>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid item sm={12} md={2}>
        <Box>{listCountries ? <ListCountries /> : <ListStatesBR />}</Box>
      </Grid>
    </Grid>
  );
};

export default GeneralCharts;
