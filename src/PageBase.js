import React from "react";
import GeneralCharts from "./GeneralCharts";
import DeathChart from './DeathChart';

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
