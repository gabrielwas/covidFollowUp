import React, { Component } from "react";
import { curveCatmullRom } from "d3-shape";

import "../../node_modules/react-vis/dist/style.css";

import {
  XYPlot,
  XAxis,
  YAxis,
  ChartLabel,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
  FlexibleXYPlot,
} from "react-vis";

const LineVis = () => {
  return (
    <FlexibleXYPlot>

      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      <ChartLabel
        text="X Axis"
        className="alt-x-label"
        includeMargin={false}
        xPercent={0.025}
        yPercent={1.01}
      />

      <ChartLabel
        text="Y Axis"
        className="alt-y-label"
        includeMargin={false}
        xPercent={0.06}
        yPercent={0.06}
        style={{
          transform: "rotate(-90)",
          textAnchor: "end",
        }}
      />

      <LineSeries
        className="first-series"
        data={[
          { x: 1, y: 3 },
          { x: 2, y: 5 },
          { x: 3, y: 15 },
          { x: 4, y: 12 },
        ]}
      />
      <LineSeries className="second-series" data={null} />
      <LineSeries
        className="third-series"
        curve={"curveMonotoneX"}
        data={[
          { x: 1, y: 10 },
          { x: 2, y: 4 },
          { x: 3, y: 2 },
          { x: 4, y: 15 },
        ]}
        strokeDasharray={"7, 3"}
      />
      <LineSeries
        className="fourth-series"
        curve={curveCatmullRom.alpha(0.5)}
        style={{
          // note that this can not be translated to the canvas version
          strokeDasharray: "2 2",
        }}
        data={[
          { x: 1, y: 7 },
          { x: 2, y: 11 },
          { x: 3, y: 9 },
          { x: 4, y: 2 },
        ]}
      />
 
    </FlexibleXYPlot>
  );
};

export default LineVis;
