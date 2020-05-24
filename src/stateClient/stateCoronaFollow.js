import { createContext, useContext } from "react";

export const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);

export const initialState = {
  countryData: undefined,
  allData: undefined,
  countries: undefined,
  selectedCountry: "Brazil",
  daysRange: undefined,
  activeStep: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "updateProperty":
      return {
        ...state,
        [action.property]: action.info,
      };

    case "updateSelectedCountry":
      return {
        ...state,
        selectedCountry: action.info,
      };

    default:
      return state;
  }
};
