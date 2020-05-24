import React from "react";

import "../../node_modules/react-vis/dist/style.css";

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
    <FlexibleXYPlot xType="time">
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <DiscreteColorLegend
        style={{ position: "absolute", left: "5%", top: "5%" }}
        items={ITEMS}
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[3].data}
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[2].data}
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[1].data}
      />

      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[0].data}
      />
    </FlexibleXYPlot>
  );
};

export default LineVis;
