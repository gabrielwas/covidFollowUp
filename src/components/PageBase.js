import React from "react";
import GeneralCharts from "../pages/GeneralCharts";
import DeathChart from "../pages/DeathChart";

const PageStep = ({ step }) => {
  switch (step) {
    case 1:
      return <GeneralCharts />;

    case 2:
      return <DeathChart />;

    default:
      break;
  }
};

const PageBase = ({ step }) => {
  return <PageStep step={step} />;
};

export default PageBase;
