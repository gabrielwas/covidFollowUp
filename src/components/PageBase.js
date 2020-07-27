import React from "react";
import GeneralCharts from "../pages/GeneralCharts";
import DeathChart from "../pages/DeathChart";

const PageStep = ({ step }) => {
  switch (step) {
    case 1:
      return <GeneralCharts listCountries={true} />;

    case 2:
      return <DeathChart dailyCases={true} dataType='country'/>;

    case 3:
      return <DeathChart dailyCases={false} dataType='country'/>;

    case 4:
      return <GeneralCharts listCountries={false} />;

    case 5:
      return <DeathChart dataType='state'/>;

    case 6:
      return <DeathChart dataType='city'/>;

    default:
      break;
  }
};

const PageBase = ({ step }) => {
  return <PageStep step={step} />;
};

export default PageBase;
