import React, { useEffect, useState } from "react";

function useMarket(id, currency, days, interval) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        id +
        "/market_chart?vs_currency=" +
        currency +
        "&days=" +
        days +
        "&interval=" +
        interval
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return data;
}

export default useMarket;
