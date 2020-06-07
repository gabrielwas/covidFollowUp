import React from "react";
import GeneralCharts from "../pages/GeneralCharts";
import DeathChart from "../pages/DeathChart";

const PageStep = ({ step }) => {
  switch (step) {
    case 1:
      return <GeneralCharts listCountries={true} />;

    case 2:
      return <DeathChart dailyCases={true} />;

    case 3:
      return <DeathChart dailyCases={false} />;

    case 4:
      return <GeneralCharts listCountries={false} />;

    default:
      break;
  }
};

const PageBase = ({ step }) => {
  return <PageStep step={step} />;
};

export default PageBase;
