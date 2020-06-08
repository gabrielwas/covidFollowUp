import React, { useEffect } from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";

import {
  StateContext,
  initialState,
  reducer,
} from "./stateClient/stateCoronaFollow";

import { getCountries, getCountryData } from "./stateClient/clientCountries";

import { getDataByStateBR, loadStates } from "./stateClient/clientStatesBR";

import UpperBar from "./basicComponents/UpperBar";
import PageBase from "./components/PageBase";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
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

    getCountryData("Brazil", [0, daysBetween]).then((countryData) => {
      dispatch({
        type: "updateProperty",
        property: "countryData",
        info: countryData,
      });
    })

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
    })
  }, []);

  return (
    <div className={classes.root}>
      <StateContext.Provider value={{ state, dispatch }}>
        <UpperBar name="Covid Follow-up" />

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <PageBase step={state.activeStep} />
        </main>
      </StateContext.Provider>
    </div>
  );
}

export default App;
