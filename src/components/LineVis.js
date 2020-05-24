import React from "react";

import "../../node_modules/react-vis/dist/style.css";
import Grid from "@material-ui/core/Grid";

import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleXYPlot,
  LineMarkSeries,
  DiscreteColorLegend,
} from "react-vis";

const ITEMS = ["Confirmados", "Casos Ativos", "Recuperados", "Mortes"];

const LineVis = ({ data }) => {
  return (
    <FlexibleXYPlot xType="time" margin={{ right: 65, left: 10}}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis orientation="right" />
      <DiscreteColorLegend
        style={{ position: "absolute", left: "5%", top: "5%" }}
        items={ITEMS}
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[3].data}
        color="#3498DB"
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[2].data}
        color="#F1C40F"
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[1].data}
        color="#16A085"
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[0].data}
        color="#E74C3C"
      />
    </FlexibleXYPlot>
  );
};

export default LineVis;
