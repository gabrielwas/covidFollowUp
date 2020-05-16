import React from "react";
import Grid from "@material-ui/core/Grid";
import GeneralCharts from "./GeneralCharts";

const PageStep = ({ step }) => {
  switch (step) {
    case 1:
      return <GeneralCharts />;

    default:
      break;
  }
};

const PageBase = ({ step }) => {
  return <PageStep step={step} />;
};

export default PageBase;
