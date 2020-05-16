import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const MyResponsiveBar = ({ data }) => {
  return (
    <ResponsiveBar
      data={data}
      keys={["deaths"]}
      indexBy="date"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      colors={{ scheme: "set1" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: "fries",
          },
          id: "dots",
        },
        {
          match: {
            id: "sandwich",
          },
          id: "lines",
        },
      ]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Dia",
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "Quantidade",
        legendPosition: "middle",
        legendOffset: -50,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[]}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
    />
  );
};

export default MyResponsiveBar;
