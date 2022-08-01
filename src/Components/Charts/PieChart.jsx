// material
import * as React from "react";
import { Card, CardHeader } from "@mui/material";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
// Importing toastify module

export default function DoughnutStockChart() {
  let outOfStock = 40;
  let inStock = 400;

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, inStock],
      },
    ],
  };

  return (
    <Card>
      <CardHeader title="Stock Status" subheader="Chart of In & Out Stock" />
      <div className="doughnutChart">
        <Doughnut data={doughnutState} />
      </div>
    </Card>
  );
}
