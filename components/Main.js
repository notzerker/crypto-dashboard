import React, { useEffect, useState } from "react";
import Layout from "./Layouts/Layout";
import Card from "./UI/Card";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import useCoins from "../hooks/useCoins";
import Graph from "./UI/Graph";

const Main = () => {
  const btcData = useCoins("bitcoin");
  const ethData = useCoins("ethereum");
  const bnbData = useCoins("binancecoin");

  const [selected, setSelected] = useState();

  useEffect(() => {
    btcData && setSelected(btcData);
  }, [btcData]);

  console.log(ethData);

  return (
    <Layout>
      <div className="w-full grid grid-cols-4 gap-16 h-full py-12">
        <div className="w-full h-full flex flex-col space-y-4 rounded-lg">
          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
                />
              </svg>
            }
            id={btcData && btcData.name}
            price={btcData && btcData.market_data.current_price.usd}
            priceChange={btcData && btcData.market_data.price_change_24h}
            percentage={
              btcData && btcData.market_data.price_change_percentage_24h
            }
            onClick={() => setSelected(btcData)}
          />
          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <g fill="#FFF" fillRule="evenodd">
                  <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm7.994-15.781L16.498 4 9 16.22l7.498 4.353 7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z" />
                  <g fillRule="nonzero">
                    <path fillOpacity={0.5} d="M16.498 4v8.87l7.497 3.35z" />
                    <path opacity={0.8} d="M16.498 4 9 16.22l7.498-3.35z" />
                    <path
                      fillOpacity={0.5}
                      d="M16.498 21.968v6.027L24 17.616z"
                    />
                    <path opacity={0.796} d="M16.498 27.995v-6.028L9 17.616z" />
                    <path fillOpacity={0.5} d="m9 16.22 7.498 4.353v-7.701z" />
                  </g>
                </g>
              </svg>
            }
            id={ethData && ethData.name}
            price={ethData && ethData.market_data.current_price.usd}
            priceChange={ethData && ethData.market_data.price_change_24h}
            percentage={
              ethData && ethData.market_data.price_change_percentage_24h
            }
            onClick={() => setSelected(ethData)}
          />
          <Card
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="#FFF"
                  d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-3.884-17.596L16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26 2.26L10.52 16l-2.26-2.26L6 16zm6.116 1.596-2.263 2.257.003.003L16 26l6.146-6.146v-.001l-2.26-2.26L16 21.48l-3.884-3.884zM21.48 16l2.26 2.26L26 16l-2.26-2.26L21.48 16zm-3.188-.002h.001L16 13.706 14.305 15.4l-.195.195-.401.402-.004.003.004.003 2.29 2.291 2.294-2.293.001-.001-.002-.001z"
                />
              </svg>
            }
            id={bnbData && bnbData.name}
            price={bnbData && bnbData.market_data.current_price.usd}
            priceChange={bnbData && bnbData.market_data.price_change_24h}
            percentage={
              bnbData && bnbData.market_data.price_change_percentage_24h
            }
            onClick={() => setSelected(bnbData)}
          />
        </div>
        <div className="w-full col-span-2 h-full rounded-lg bg-dark">
          <Graph data={selected} />
        </div>
        <div className="w-full h-full rounded-lg bg-dark"></div>
      </div>
    </Layout>
  );
};

export default Main;
