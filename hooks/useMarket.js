import React, { useEffect, useState } from "react";

function useMarket() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return [data, setData];
}

export default useMarket;
