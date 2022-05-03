import React, { useEffect, useState } from "react";

function useCoins(id) {
  const [data, setData] = useState();
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/" +
        id +
        "?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return data;
}

export default useCoins;
