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

const LineGraph = ({ market, drop, selected }) => {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState([]);
  const [color, setColor] = useState("");
  const [gradient, setGradient] = useState("#ffffff");

  useEffect(() => {
    if (market) {
      const priceArray = [];
      const labelArray = [];
      if (selected === "market") {
        market.market_caps &&
          market.market_caps.forEach((price) => {
            priceArray.push(price[1]);
            labelArray.push("");
          });
      } else if (selected === "prices") {
        market.prices &&
          market.prices.forEach((price) => {
            priceArray.push(price[1]);
            labelArray.push("");
          });
      } else {
        market.total_volumes.forEach((price) => {
          market.total_volumes && priceArray.push(price[1]);
          labelArray.push("");
        });
      }

      setData(priceArray);
      setLabel(labelArray);
    }
  }, [market, selected]);

  useEffect(() => {
    if (drop) {
      setColor("#ef4444");
    } else {
      setColor("#22c45d");
    }
  }, [drop]);

  useEffect(() => {
    var ctx = document.getElementById("line").getContext("2d");

    if (color) {
      var grad = ctx.createLinearGradient(0, 0, 0, 300);
      grad.addColorStop(0, color.toString() + "50");
      grad.addColorStop(1, color.toString() + "10");
      setGradient(grad);
    }
  }, [color]);

  return (
    <div className="w-full h-fit rounded-lg items-center justify-center flex p-4 bg-dark">
      <Line
        id="line"
        data={{
          labels: label,
          datasets: [
            {
              label:
                selected === "market"
                  ? "Market Cap"
                  : selected === "prices"
                  ? "USD Price"
                  : selected === "volume" && "Total Volume",
              data: data,
              backgroundColor: color,
              borderColor: color,
              borderWidth: 2,
              fill: {
                target: "origin",
                above: gradient, // Area will be red above the origin
              },
              pointRadius: 3,
              pointHoverRadius: 3,
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
        width={700}
      />
    </div>
  );
};

export default LineGraph;
