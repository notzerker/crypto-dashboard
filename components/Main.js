import React, { useEffect, useState } from "react";
import Layout from "./Layouts/Layout";
import Card from "./UI/Card";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import useCoins from "../hooks/useCoins";
import Graph from "./UI/Graph";
import Info from "./UI/Info";
import useStore from "../lib/store";
import Navbar from "./Navbar";
import useMarket from "../hooks/useMarket";
import Slider from "./UI/Slider";

const Main = () => {
  const data = useMarket();

  const sliderData = [
    {
      title: "Cryptocurrencies",
      value: "crypto",
    },
    {
      title: "DeFi",
      value: "defi",
    },
    {
      title: "NFT",
      value: "nft",
    },
    {
      title: "Metaverse",
      value: "metaverse",
    },
    {
      title: "Solana",
      value: "solana",
    },
    {
      title: "Avalanche",
      value: "avalanche",
    },
  ];

  return (
    <Layout>
      <div
        className={`w-full flex flex-col h-full transition duration-300 ease-linear`}
      >
        <div className="h-fit w-full bg-dark rounded-lg mt-12 p-12 space-y-1">
          <h1 className="font-bold text-4xl">Crypto Market</h1>
          <p>
            The global crypto market cap is $1.30T, a 0.87% increase over the
            last day.
          </p>
        </div>
        <div className="mt-6 w-full items-center justify-center flex">
          <Slider data={sliderData} />
        </div>
        <div className="w-full h-fit flex rounded-lg flex-col justifty-start mb-12 bg-dark p-4 px-6">
          <div className="w-full rounded-t-lg h-fit p-4 grid grid-cols-8 bg-dark text-sm font-medium text-gray">
            <div className="flex flex-row col-span-4 cursor-pointer">
              <p className="pr-4 cursor-pointer hover:text-light">#</p>
              <p className="cursor-pointer hover:text-light">Name</p>
            </div>
            <p className="col-span-1 flex justify-end cursor-pointer hover:text-light">
              Price
            </p>
            <p className="col-span-1 flex justify-end cursor-pointer hover:text-light">
              Price Change
            </p>
            <p className="col-span-1 flex justify-end cursor-pointer hover:text-light">
              Total Volume
            </p>
            <p className="col-span-1 flex justify-end cursor-pointer hover:text-light">
              Market Cap
            </p>
          </div>
          <div className="w-full h-[1px] bg-light" />
          {data &&
            data.map((data, index) => (
              <>
                <Card
                  index={index}
                  img={data.image}
                  id={data.id}
                  name={data.name}
                  price={data.current_price}
                  volume={data.total_volume}
                  cap={data.market_cap}
                  percentage={data.price_change_percentage_24h}
                  symbol={data.symbol}
                />
                <div className="w-full h-[1px] bg-light" />
              </>
            ))}
          <div className="w-full rounded-b-md h-12 bg-dark"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
