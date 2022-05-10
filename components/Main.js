import React, { useEffect, useState } from "react";
import Layout from "./Layouts/Layout";
import Card from "./UI/Card";
import { FaBitcoin, FaEthereum } from "react-icons/fa";
import useCoins from "../hooks/useCoins";
import Graph from "./UI/Graph";
import Info from "./UI/Info";
import useStore from "../lib/store";
import Navbar from "./Navbar";

const Main = () => {
  const btcData = useCoins("bitcoin");
  const ethData = useCoins("ethereum");
  const bnbData = useCoins("binancecoin");
  const usdcData = useCoins("usd-coin");

  const [selected, setSelected] = useState();
  const [selectedMarket, setSelectedMarket] = useState();

  const selectionHanlder = (id) => {
    if (id === "btc") {
      setSelected(btcData);
      setSelectedMarket("bitcoin");
    } else if (id === "eth") {
      setSelected(ethData);
      setSelectedMarket("ethereum");
    } else if (id === "bnb") {
      setSelected(bnbData);
      setSelectedMarket("binancecoin");
    } else {
      setSelected(usdcData);
      setSelectedMarket("usd-coin");
    }
  };

  useEffect(() => {
    btcData && selectionHanlder("btc");
  }, [btcData]);

  return (
    <Layout>
      <div
        className={`w-full grid grid-cols-4 gap-4 h-full py-12 transition duration-300 ease-linear p-8`}
      >
        <div className="w-full h-full flex flex-col justifty-start space-y-4 rounded-md">
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
            symbol={btcData && btcData.symbol}
            onClick={() => selectionHanlder("btc")}
            selected={selected}
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
            symbol={ethData && ethData.symbol}
            onClick={() => selectionHanlder("eth")}
            selected={selected}
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
            symbol={bnbData && bnbData.symbol}
            onClick={() => selectionHanlder("bnb")}
          />
          <Card
            icon={
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm3.352 5.56c-.244-.12-.488 0-.548.243-.061.061-.061.122-.061.243v.85l.01.104a.86.86 0 0 0 .355.503c4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85l.005.088a.45.45 0 0 0 .36.397c.061 0 .183 0 .244-.06a10.895 10.895 0 0 0 7.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162zm-6.46-.06c-.061 0-.183 0-.244.06a10.895 10.895 0 0 0-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85l-.01-.08c-.042-.169-.199-.362-.355-.466-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85l-.005-.088a.45.45 0 0 0-.36-.397zm3.535 3.156h-.915l-.088.008c-.2.04-.346.212-.4.478v1.396l-.207.032c-1.708.304-2.778 1.483-2.778 2.942 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036l-.079.007a.413.413 0 0 0-.347.418v.06l.033.18c.29 1.424 1.266 2.443 3.197 2.734v1.457l.008.088c.04.198.213.344.48.397h.914l.088-.008c.2-.04.346-.212.4-.477V21.34l.207-.04c1.713-.362 2.84-1.601 2.84-3.177 0-2.124-1.28-2.852-3.84-3.156-1.829-.243-2.194-.728-2.194-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 0 0 .427.303h.975l.079-.006a.413.413 0 0 0 .348-.419v-.06l-.037-.173a3.04 3.04 0 0 0-2.706-2.316V9.142l-.008-.088c-.04-.199-.213-.345-.48-.398z"
                  fill="#FFF"
                  fillRule="evenodd"
                />
              </svg>
            }
            id={usdcData && usdcData.name}
            price={usdcData && usdcData.market_data.current_price.usd}
            priceChange={usdcData && usdcData.market_data.price_change_24h}
            percentage={
              usdcData && usdcData.market_data.price_change_percentage_24h
            }
            symbol={usdcData && usdcData.symbol}
            onClick={() => selectionHanlder("usdc")}
            selected={selected}
          />
        </div>
        <div className="w-full col-span-2 h-full rounded-md flex flex-row items-between">
          <Graph data={selected} selectedMarket={selectedMarket} />
        </div>
        <div className="w-full col-span-1 h-full">
          <Info data={selected} />
        </div>
      </div>
    </Layout>
  );
};

export default Main;
