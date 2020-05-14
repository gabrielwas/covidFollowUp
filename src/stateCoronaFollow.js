import { createContext, useContext } from "react";

export const StateContext = createContext();
export const useStateValue = () => useContext(StateContext);

export const initialState = {
  countryData: undefined,
  activeStep: 1,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "updateProperty":
      return {
        ...state,
        [action.property]: action.info,
      };

    default:
      return state;
  }
};
