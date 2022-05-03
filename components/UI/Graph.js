import React from "react";

const Graph = ({ data }) => {
  return (
    data && (
      <div className="w-full h-full flex flex-col space-y-8 items-start p-4">
        <h1 className="font-semibold text-2xl">{data.name}</h1>
        <div className="flex flex-col space-y-1">
          <p className="text-[#b9c1c3]">TVL</p>
          <p className="text-lg">
            {data.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-[#b9c1c3]">Market Cap</p>
          <p className="text-lg">
            {data.market_data.market_cap.usd.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-[#b9c1c3]">Total Volume</p>
          <p className="text-lg">
            {data.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div>
        <div className="flex flex-col space-y-1">
          <p className="text-[#b9c1c3]">Total Supply</p>
          <p className="text-lg">
            {data.market_data.total_supply
              ? data.market_data.total_supply.toLocaleString()
              : "NaN"}
          </p>
        </div>
      </div>
    )
  );
};

export default Graph;
