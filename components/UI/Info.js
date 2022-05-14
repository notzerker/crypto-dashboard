import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Info = ({ data }) => {
  const [animate, setAnimate] = useState(false);

  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  const attrVariants = {
    visible: { transition: { delayChildren: 0 } },
    hidden: { opacity: 1 },
  };

  const attrItems = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 4 },
  };

  const priceHandler = (price) => {
    var result = (Math.round(price * 100) / 100).toFixed(2);

    if (price > 1000000000) {
      result = "$" + (price / 1000000000).toFixed(2) + "b";
    } else if (price > 1000000) {
      result = "$" + (price / 1000000).toFixed(2) + "m";
    } else if (price > 1000) {
      result = "$" + (price / 1000).toFixed(2) + "k";
    } else {
      result = "$" + result;
    }

    return result;
  };

  return (
    data && (
      <motion.div className="w-full h-full flex flex-col col-span-1 space-y-6 items-start p-4 bg-dark rounded-lg">
        <motion.div>
          <p className="text-[#b9c1c3] text-sm">Total Volume</p>
          <motion.p className="text-lg" variants={attrItems}>
            {priceHandler(data.market_data.total_volume.usd)}
          </motion.p>
        </motion.div>
        <motion.div>
          <p className="text-[#b9c1c3] text-sm">Market Cap</p>
          <motion.p className="text-lg" variants={attrItems}>
            {priceHandler(data.market_data.market_cap.usd)}
          </motion.p>
        </motion.div>
        <motion.div>
          <p className="text-[#b9c1c3] text-sm">Total Supply</p>
          <motion.p className="text-lg" variants={attrItems}>
            {data.market_data.total_supply
              ? priceHandler(data.market_data.total_supply)
              : "N/A"}
          </motion.p>
        </motion.div>
        <motion.div>
          <p className="text-[#b9c1c3] text-sm">24h High</p>
          <motion.p className="text-lg" variants={attrItems}>
            {priceHandler(data.market_data.high_24h.usd)}
          </motion.p>
        </motion.div>
        <motion.div>
          <p className="text-[#b9c1c3] text-sm">24h Low</p>
          <motion.p className="text-lg" variants={attrItems}>
            {priceHandler(data.market_data.low_24h.usd)}
          </motion.p>
        </motion.div>
        {/* <motion.div>
          <p className="text-[#b9c1c3] text-sm">All Time High</p>
          <motion.p className="text-lg" variants={attrItems}>
            {priceHandler(data.market_data.ath.usd)}
          </motion.p>
        </motion.div>
        <motion.div>
          <p className="text-[#b9c1c3] text-sm">All Time Low</p>
          <motion.p className="text-lg" variants={attrItems}>
            {priceHandler(data.market_data.atl.usd)}
          </motion.p>
        </motion.div> */}
      </motion.div>
    )
  );
};

export default Info;
