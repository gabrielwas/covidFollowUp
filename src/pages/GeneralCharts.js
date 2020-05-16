import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import Paper from "@material-ui/core/Paper";
import MyResponsiveLine from "../chartComponents/MyResponsiveLine";
import ListCountries from "../components/ListCountries";
import Chip from "@material-ui/core/Chip";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  card: {
    flexGrow: 1,
  },
}));

const GeneralCharts = () => {
  const { state } = useStateValue();
  const classes = useStyles();

  return (
    <Grid container spacing={2} alignItems="center" justify="center" style={{}}>
      <Grid item sm={12} md={2}>
        <Box>
          <ListCountries />
        </Box>
      </Grid>

      <Grid item sm={12} md={10}>
        <Grid container spacing={0} className={classes.root}>
          <Grid item sm={12} md={12}>
            <Chip label={state.selectedCountry} />
          </Grid>

          <Grid item sm={12} md={12}>
            <Box p={1}>
              <div style={{ height: "85vh", width: "65vw" }}>
                <Paper className={classes.root} elevation={3}>
                  {state.countryData && (
                    <MyResponsiveLine data={state.countryData} />
                  )}
                </Paper>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GeneralCharts;
