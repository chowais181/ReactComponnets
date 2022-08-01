import React from "react";
import BarChart from "./BarChart";
import LineGraph from "./LineGraph";
import DonoughtChart from "./DonoughtChart";
import PieChart from "./PieChart";
//important for usign charts
//if not importing chart.js/auto then error
import "chart.js/auto";
export default function Chart() {
  return (
    <div>
      <BarChart />
      <br />
      <LineGraph />
      <br />
      <DonoughtChart />
      <br />
      <PieChart />
      <br />
    </div>
  );
}
