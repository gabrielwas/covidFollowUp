import React, { useEffect } from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";

import { StateContext, initialState, reducer } from "./stateCoronaFollow";

import { getData, getCountries, getCountryData } from "./client";

import UpperBar from "./basicComponents/UpperBar";
import Sidebar from "./Sidebar";
import PageBase from "./PageBase";

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
    getData().then((allData) => {
      dispatch({
        type: "updateProperty",
        property: "allData",
        info: allData,
      });

      dispatch({
        type: "updateProperty",
        property: "countryData",
        info: getCountryData("Brazil", allData),
      });
    });

    getCountries().then((countries) => {
      dispatch({
        type: "updateProperty",
        property: "countries",
        info: countries,
      });
    });
  }, []);

  return (
    <div className={classes.root}>
      <StateContext.Provider value={{ state, dispatch }}>
        <UpperBar name="Follow Music" />

        <Sidebar />

        <main className={classes.content}>
          <div className={classes.toolbar} />

          <PageBase step={state.activeStep} />
        </main>
      </StateContext.Provider>
    </div>
  );
}

export default App;
