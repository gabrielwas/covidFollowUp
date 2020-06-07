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
  { title: "Casos Ativos", color: "#F1C40F", strokeWidth: 12 },
  { title: "Recuperados", color: "#16A085", strokeWidth: 12 },
  { title: "Mortes", color: "#E74C3C", strokeWidth: 12 },
];

const LineVisCountries = ({ data }) => {
  const [crosshairValues, setCrosshairValues] = useState([]);

  const titleFormating = (d) => [
    {
      title: "Confirmados",
      value: d[3].y,
    },
    {
      title: "Casos Ativos",
      value: d[2].y,
    },
    {
      title: "Recuperados",
      value: d[1].y,
    },
    {
      title: "Mortes",
      value: d[0].y,
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
        data={data[3].data}
        color="#3498DB"
        onNearestX={(value, { index }) =>
          setCrosshairValues(data.map((d) => d.data[index]))
        }
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
      <Crosshair values={crosshairValues} itemsFormat={titleFormating} />
    </FlexibleXYPlot>
  );
};

export default LineVisCountries;
