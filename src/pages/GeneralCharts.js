import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import Paper from "@material-ui/core/Paper";
import ListCountries from "../components/ListCountries";
import Chip from "@material-ui/core/Chip";

import LineVis from "../chartComponents/LineVis";

import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";

import {getCountryData } from "../stateClient/client";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  slider: {
    width: 300,
  },
  card: {
    flexGrow: 1,
  },
}));

function valuetext(value) {
  return `${value}°C`;
}

let currentDate = new Date();
let firstDate = new Date("2020-03-03");

const daysBetween = Math.floor(
  (currentDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)
);

const marks = [
  {
    value: 0,
    label: '03-03-2020',
  },
  {
    value: daysBetween,
    label: `${currentDate.getDate()}-${currentDate.getMonth()+1}-${currentDate.getFullYear()}`,
  }
];

const GeneralCharts = () => {
  const { state, dispatch } = useStateValue();
  const classes = useStyles();

  const handleSliderChange = (event, newValue) => {
    dispatch({
      type: "updateProperty",
      property: "daysRange",
      info: newValue,
    });

    dispatch({
      type: "updateProperty",
      property: "countryData",
      info: getCountryData(state.selectedCountry, state.allData, newValue),
    });
  };

  return (
    <Grid container spacing={2} alignItems="center" justify="center" style={{}}>
      <Grid item sm={12} md={10}>
        <Grid container spacing={0} className={classes.root}>
          <Grid item sm={12} md={6}>
            <Chip label={state.selectedCountry} />
          </Grid>

          <Grid item sm={12} md={6}>
            {state.daysRange && <Slider
              value={state.daysRange}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={valuetext}
              marks={marks}
              max={daysBetween}
            />}
          </Grid>

          <Grid item sm={12} md={12}>
            <Box p={1}>
              <div style={{ height: "80vh", width: "80vw" }}>
                <Paper className={classes.root} elevation={3}>
                  {state.countryData && <LineVis data={state.countryData} />}
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

export default GeneralCharts;
