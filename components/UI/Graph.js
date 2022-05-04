import React, { useEffect, useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const Graph = ({ data }) => {
  const [drop, setDrop] = useState(false);
  const [percentage, setPercentage] = useState();

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

  return (
    data && (
      <div className="flex flex-col items-between w-full h-full space-y-12">
        <div className="flex flex-col space-y-4">
          <div className="w-full flex flex-row space-x-2 items-center justify-start text-lg">
            {/* <div className="w-5 h-5">{icon}</div> */}
            <h1 className="font-semibold text-2xl">{data.name}</h1>
            <h1 className="text-[#b9c1c3] uppercase">({data.symbol})</h1>
          </div>
          <div className="w-full flex flex-row items-center space-x-2">
            <p className="text-white text-2xl">
              ${data.market_data.current_price.usd.toLocaleString()}
            </p>
            <p
              className={`${
                drop ? "bg-red-500" : "bg-green-500"
              } text-sm font-semibold px-2 py-1 rounded-lg space-x-2 flex flex-row items-center`}
            >
              {drop ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
              {percentage}%
            </p>
          </div>
        </div>
        <div className="bg-dark rounded-xl w-full h-full"></div>
      </div>
    )
  );
};

export default Graph;
