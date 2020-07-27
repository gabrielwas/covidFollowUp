import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import DirectionsIcon from "@material-ui/icons/Directions";
import IconButton from "@material-ui/core/IconButton";

import { getDataByStateBR } from "../stateClient/clientStatesBR";
import { useStateValue } from "../stateClient/stateCoronaFollow";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
}));

const InsertCity = () => {
  const classes = useStyles();

  const { state, dispatch } = useStateValue();

  const [city, setCity] = useState('');

  const onChangeCityBR = e => {
    setCity(e.target.value)
  };

  const onClickCityBR = () => {

    dispatch({
      type: "updateProperty",
      property: "selectedCityBR",
      info: city,
    });

    getDataByStateBR(city, state.daysRange, false).then((result) => {
      dispatch({
        type: "updateProperty",
        property: "cityBRData",
        info: result,
      });
    });
  };
 
  return (
    <Paper component="form" className={classes.root}>
      <TextField id="city-field" label="Cidade" onChange={onChangeCityBR} />
      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
        onClick={() => onClickCityBR()}
      >
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
};

export default InsertCity;
