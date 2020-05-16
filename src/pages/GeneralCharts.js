import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import Paper from "@material-ui/core/Paper";
import MyResponsiveLine from "../chartComponents/MyResponsiveLine";
import ListCountries from "../components/ListCountries";

import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
}));

const GeneralCharts = () => {
  const { state } = useStateValue();
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      alignItems="flex-start"
      style={{ }}
      justify="center"
    >

<Grid item sm={12} md={2}>
        <Box p={2}>
          <ListCountries />
        </Box>
      </Grid>

<Grid item sm={12} md={10}>
        <Box p={2}>
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
  );
};

export default GeneralCharts;
