import React from "react";
import "../../node_modules/react-vis/dist/style.css";
import {
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  FlexibleXYPlot,
  VerticalBarSeries,
  LabelSeries,
} from "react-vis";



const BarVis = ({ data }) => {

  return (
    <FlexibleXYPlot xType="ordinal"  margin={{ right: 65, left: 10, bottom: 80 }}>
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis tickLabelAngle={-90}/>
      <YAxis orientation="right" />

      <VerticalBarSeries className="vertical-bar-series-example" data={data} color="#CB4335"/>
      <LabelSeries data={data} getLabel={d => d.y} labelAnchorX="middle" labelAnchorY="text-after-edge"/>

    </FlexibleXYPlot>
  );
};

export default BarVis;
