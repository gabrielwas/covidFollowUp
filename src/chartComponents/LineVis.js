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

const ITEMS = [
  { title: "Confirmados", color: "#3498DB", strokeWidth: 12 },
  { title: "Casos Ativos", color: "#F1C40F", strokeWidth: 12 },
  { title: "Recuperados", color: "#16A085", strokeWidth: 12 },
  { title: "Mortes", color: "#E74C3C", strokeWidth: 12 },
];

const LineVis = ({ data }) => {
  return (
    <FlexibleXYPlot xType="time" margin={{ right: 65, left: 10 }}>
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
