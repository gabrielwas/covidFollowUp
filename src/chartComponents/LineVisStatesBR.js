import React, { useState } from "react";

import "../../node_modules/react-vis/dist/style.css";

import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleXYPlot,
  LineMarkSeries,
  DiscreteColorLegend,
  Crosshair,
} from "react-vis";

const ITEMS = [
  { title: "Confirmados", color: "#3498DB", strokeWidth: 12 },
  { title: "Mortes", color: "#E74C3C", strokeWidth: 12 },
];

const LineVisStatesBR = ({ data }) => {
  const [crosshairValues, setCrosshairValues] = useState([]);

  const titleFormating = (d) => [
    {
      title: "Confirmados",
      value: d[0].y,
    },
    {
      title: "Mortes",
      value: d[1].y,
    },
  ];

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
        data={data[0].data}
        color="#3498DB"
        onNearestX={(value, { index }) =>
          setCrosshairValues(data.map((d) => d.data[index]))
        }
      />
      <LineMarkSeries
        className="linemark-series-example-2"
        curve={"curveMonotoneX"}
        data={data[1].data}
        color="#E74C3C"
      />
      <Crosshair values={crosshairValues} itemsFormat={titleFormating} />
    </FlexibleXYPlot>
  );
};

export default LineVisStatesBR;
