import React, { useEffect, useMemo, useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import LineGraph from "./LineGraph";

const Graph = ({ data, selectedMarket }) => {
  const [drop, setDrop] = useState(false);
  const [percentage, setPercentage] = useState();
  const [chartData, setChartData] = useState();
  const [market, setMarket] = useState("prices");
  const [interval, setInterval] = useState("7");
  const [marketData, setMarketData] = useState();

  useEffect(() => {
    if (data) {
      if (data.market_data.price_change_percentage_24h < 0) {
        setDrop(true);
        setPercentage(
          Math.round(
            data.market_data.price_change_percentage_24h
              .toString()
              .replace("-", "") * 100
          ) / 100
        );
      } else {
        setDrop(false);
        setPercentage(
          Math.round(data.market_data.price_change_percentage_24h * 100) / 100
        );
      }
    }
  }, [data]);

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        selectedMarket +
        "/market_chart?vs_currency=usd&days=" +
        interval +
        "&interval=daily"
    )
      .then((res) => res.json())
      .then((data) => {
        setMarketData(data);
      });
  }, [selectedMarket, interval]);

  console.log(data);

  return (
    data && (
      <div className="flex flex-col items-between w-full h-full">
        <div className="flex flex-col space-y-4">
          <div className="mb-4">
            <div className="w-full flex flex-row space-x-2 items-center justify-start text-lg mb-2">
              <h1 className="font-medium text-2xl">{data.name}</h1>
              <h1 className="text-gray uppercase">({data.symbol})</h1>
            </div>
            <div className="w-full flex flex-row items-center space-x-2">
              <p className="text-white text-3xl">
                ${data.market_data.current_price.usd.toLocaleString()}
              </p>
              <p
                className={`${
                  drop ? "bg-red-500" : "bg-green-500"
                } text-sm font-semibold px-2 py-1 rounded-md space-x-2 flex flex-row items-center`}
              >
                {drop ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
                {percentage}%
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between mb-8">
          <div className="bg-dark rounded-md flex flex-row p-1 space-x-1">
            <div
              className={`${
                market === "market" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setMarket("market")}
            >
              Market Cap
            </div>
            <div
              className={`${
                market === "prices" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setMarket("prices")}
            >
              Prices
            </div>
            <div
              className={`${
                market === "volume" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setMarket("volume")}
            >
              Total Volume
            </div>
          </div>
          <div className="bg-dark rounded-md flex flex-row p-1 space-x-1">
            <div
              className={`${
                interval === "1" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setInterval("1")}
            >
              1D
            </div>
            <div
              className={`${
                interval === "7" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setInterval("7")}
            >
              7D
            </div>
            <div
              className={`${
                interval === "30" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setInterval("30")}
            >
              1M
            </div>
            <div
              className={`${
                interval === "90" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setInterval("90")}
            >
              3M
            </div>
            <div
              className={`${
                interval === "max" && "bg-light"
              } hover:bg-light cursor-pointer rounded-md p-2 text-sm`}
              onClick={() => setInterval("max")}
            >
              ALL
            </div>
          </div>
        </div>
        <div className="bg-dark rounded-md w-full h-full overflow-hidden">
          <LineGraph market={marketData} drop={drop} selected={market} />
        </div>
      </div>
    )
  );
};

export default Graph;
