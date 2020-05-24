import React from "react";
import { useStateValue } from "../stateClient/stateCoronaFollow";
import Slider from "@material-ui/core/Slider";

import { getCountryData } from "../stateClient/client";

let currentDate = new Date();
let firstDate = new Date("2020-03-03");

const daysBetween = Math.floor(
  (currentDate.getTime() - firstDate.getTime()) / (1000 * 3600 * 24)
);

const marks = [
  {
    value: 0,
    label: "03-03-2020",
  },
  {
    value: daysBetween,
    label: `${currentDate.getDate()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`,
  },
];

const SliderDates = () => {
  const { state, dispatch } = useStateValue();

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
    <Slider
      value={state.daysRange}
      onChange={handleSliderChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      marks={marks}
      max={daysBetween}
    />
  );
};

export default SliderDates;
