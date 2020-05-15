import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { useStateValue } from "./stateCoronaFollow";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

import { getCountryData } from "./client";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MyResponsiveLine from "./basicComponents/MyResponsiveLine";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  listConfig: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 800,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: "30%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GeneralCharts = () => {
  const { state, dispatch } = useStateValue();
  const classes = useStyles();

  const onChangeCountry = (countryName) => {
    dispatch({
      type: "updateProperty",
      property: "selectedCountry",
      info: countryName,
    });

    dispatch({
      type: "updateProperty",
      property: "countryData",
      info: getCountryData(countryName, state.allData),
    });
  };

  return (
    <Grid
      container
      spacing={1}
      alignItems="flex-start"
      style={{ minHeight: "100vh" }}
      justify="center"
    >
      <Grid item xs={2}>
        <div className={classes.listConfig}>
          <List component="nav" aria-label="secondary mailbox folders">
            {state.countries &&
              state.countries.map((item) => (
                <ListItem
                  key={item.name}
                  button
                  onClick={() => onChangeCountry(item.name)}
                >
                  {item.progression ? (
                    <ListItemIcon>
                      <ArrowUpwardIcon style={{ color: "#ff3300" }} />
                    </ListItemIcon>
                  ) : (
                    <ListItemIcon>
                      <ArrowDownwardIcon style={{ color: "#33cc33" }} />
                    </ListItemIcon>
                  )}

                  <ListItemText
                    primary={item.name}
                    secondary={"Casos: " + item.cases.toLocaleString("pt-BR")}
                  />
                </ListItem>
              ))}
          </List>
        </div>
      </Grid>

      <Grid item xs={10}>
        <Container maxWidth="lg">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Pais</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state.selectedCountry}
              onChange={onChangeCountry}
            >
              {state.countries &&
                state.countries.map((item) => (
                  <MenuItem key={item.name} value={item.name}>
                    {item.name}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>

          <Paper className={classes.root} elevation={3}>
            <div style={{ height: 700, width: 1250 }}>
              {state.countryData && (
                <MyResponsiveLine data={state.countryData} />
              )}
            </div>
          </Paper>
        </Container>
      </Grid>
    </Grid>
  );
};

export default GeneralCharts;
