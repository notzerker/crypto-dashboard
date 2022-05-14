import React, { useEffect, useState } from "react";
import Layout from "../components/Layouts/Layout";
import Graph from "../components/UI/Graph";
import Info from "../components/UI/Info";
import useCoins from "../hooks/useCoins";
import useMarket from "../hooks/useMarket";

const coin = ({ address }) => {
  const addr = address.coin.toLowerCase();
  const data = useCoins(addr);

  return (
    <Layout>
      <div className="w-full grid-cols-4 h-full grid gap-4 pt-8">
        <div className="w-full col-span-4 h-full rounded-lg flex flex-row items-between">
          <Graph data={data} selectedMarket={addr} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
  );
  const coins = await res.json();

  const paths = coins.map((data) => ({
    params: { coin: data.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const address = context.params;

  return { props: { address } };
}

export default coin;
