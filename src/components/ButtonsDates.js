import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStateValue } from "../stateClient/stateCoronaFollow";

import Fab from "@material-ui/core/Fab";
import ScheduleIcon from "@material-ui/icons/Schedule";
import Grid from "@material-ui/core/Grid";

import { getCountryData } from "../stateClient/clientCountries";
import { getDataByStateBR } from "../stateClient/clientStatesBR";

const useStyles = makeStyles((theme) => ({
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const ButtonsDates = () => {
  const classes = useStyles();

  const { state, dispatch } = useStateValue();

  const [rangeSelected, setRangeSelected] = useState(-1);

  const onClick = (range) => {

    const newRange =
      range !== -1
        ? [state.daysRange[1] - range, state.daysRange[1]]
        : [0, state.daysRange[1]];

    dispatch({
      type: "updateProperty",
      property: "daysRange",
      info: newRange,
    });

    dispatch({
      type: "updateProperty",
      property: "countryData",
      info: getCountryData(state.selectedCountry, state.allData, newRange),
    });

    getDataByStateBR(state.selectedStateBR, newRange).then((result) => {
      dispatch({
        type: "updateProperty",
        property: "stateBRData",
        info: result,
      });
    });

    setRangeSelected(range);

  };

  const rangeOptions = [
    {
      name: "7 Dias",
      range: 8,
    },
    {
      name: "15 Dias",
      range: 16,
    },
    {
      name: "30 Dias",
      range: 31,
    },
    {
      name: "60 Dias",
      range: 61,
    },
    {
      name: "Tudo",
      range: -1,
    },
  ];

  const disableOption = (range) => {

    return rangeSelected === range;

  }

  return (
    <Grid container justify="flex-end" spacing={2}>
      {rangeOptions.map((item) => (
        <Grid key={item.range} item>
          <Fab
            size="small"
            variant="extended"
            onClick={() => onClick(item.range)}
            disabled={disableOption(item.range)}
          >
            <ScheduleIcon className={classes.extendedIcon} /> {item.name}
          </Fab>
        </Grid>
      ))}
    </Grid>
  );
};

export default ButtonsDates;
