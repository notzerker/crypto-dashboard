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

const Main = () => {
  const coins = useMarket();

  return (
    <Layout>
      <div
        className={`w-full flex h-full transition duration-300 ease-linear overflow-y-scroll`}
      >
        <div className="w-full h-fit flex flex-col justifty-start rounded-lg space-y-[1px] py-12">
          <div className="w-full rounded-t-lg h-fit p-4 grid grid-cols-8 bg-dark text-sm font-medium text-gray">
            <div className="flex flex-row col-span-4">
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
          {coins &&
            coins.map((data, index) => (
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
            ))}
          <div className="w-full rounded-b-md h-12 bg-dark"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Main;
