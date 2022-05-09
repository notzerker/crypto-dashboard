import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

const LineGraph = ({ market, drop }) => {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (market) {
      const priceArray = [];
      const labelArray = [];
      market.prices.forEach((price) => {
        priceArray.push(price[1]);
        labelArray.push("");
      });
      setData(priceArray);
      setLabel(labelArray);
    }
  }, [market]);

  useEffect(() => {
    if (drop) {
      setColor("#ef4444");
    } else {
      setColor("#22c45d");
    }
  }, [drop]);

  return (
    <div className="w-full h-full items-center justify-center flex p-4">
      <Line
        data={{
          labels: label,
          datasets: [
            {
              label: "USD price",
              data: data,
              backgroundColor: [color],
              borderColor: [color],
              borderWidth: 2,
              fill: {
                target: "origin",
                above: color.toString() + "20", // Area will be red above the origin
              },
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                display: true,
              },
            },
          },
        }}
        height={400}
        width={600}
      />
    </div>
  );
};

export default LineGraph;
