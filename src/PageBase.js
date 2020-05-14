import React from "react";
import Grid from "@material-ui/core/Grid";
import GeneralCharts from "./GeneralCharts";

const PageStep = ({ step }) => {
  switch (step) {
    case 1:
      return (
        <Grid item xs={11}>
          <GeneralCharts />
        </Grid>
      );

    default:
      break;
  }
};

const PageBase = ({ step }) => {
  return (
    <Grid
      container
      spacing={4}
      alignItems="flex-start"
      style={{ minHeight: "100vh" }}
      justify="center"
    >
      <PageStep step={step} />
    </Grid>
  );
};

export default PageBase;
