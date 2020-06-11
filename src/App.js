import React, { useEffect } from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";

import { FcLike } from "react-icons/fc";

import {
  StateContext,
  initialState,
  reducer,
} from "./stateClient/stateCoronaFollow";

import {
  getData,
  getCountries,
  getCountryData,
} from "./stateClient/clientCountries";

import { getDataByStateBR, loadStates } from "./stateClient/clientStatesBR";

import Grid from "@material-ui/core/Grid";
import UpperBar from "./basicComponents/UpperBar";
import PageBase from "./components/PageBase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
  },
  appBar: {
    height: "8%",
    top: "auto",
    bottom: 0,
  },
  grid: {
    height: "100%",
  },
  toolbar: theme.mixins.toolbar,
}));

function App() {
  const classes = useStyles();

  const [state, dispatch] = React.useReducer(reducer, initialState);

  useEffect(() => {
    let currentDate = new Date();
    let firstDate = new Date("2020-03-03");

    const daysBetween = Math.floor(
      (currentDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)
    );

    dispatch({
      type: "updateProperty",
      property: "daysRange",
      info: [0, daysBetween],
    });

    getData().then((allData) => {
      dispatch({
        type: "updateProperty",
        property: "allData",
        info: allData,
      });

      dispatch({
        type: "updateProperty",
        property: "countryData",
        info: getCountryData("Brazil", allData, [0, daysBetween]),
      });
    });

    getCountries().then((countries) => {
      dispatch({
        type: "updateProperty",
        property: "countries",
        info: countries,
      });
    });

    getDataByStateBR("PE").then((result) => {
      dispatch({
        type: "updateProperty",
        property: "stateBRData",
        info: result,
      });
    });

    loadStates().then((statesBR) => {
      dispatch({
        type: "updateProperty",
        property: "statesBR",
        info: statesBR,
      });
    });
  }, []);

  return (
    <div className={classes.root}>
      <StateContext.Provider value={{ state, dispatch }}>
        <UpperBar name="Covid Follow-up" />

        <main>
          <div className={classes.toolbar} />

          <div className={classes.content}>
            <PageBase step={state.activeStep} />
          </div>

          <AppBar position="static" color="primary" className={classes.appBar}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.grid}
            >
              <Grid item>
                <Typography>Made by Gabriel Albuquerque</Typography>
              </Grid>
              <Grid item>
                <Typography>Stay Strong! {<FcLike />}</Typography>
              </Grid>
            </Grid>
          </AppBar>
        </main>
      </StateContext.Provider>
    </div>
  );
}

export default App;
