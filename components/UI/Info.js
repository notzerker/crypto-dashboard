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

  return (
    data && (
      <motion.div className="w-full h-full flex flex-col col-span-1 space-y-8 items-start p-4 bg-dark rounded-xl">
        <motion.div>
          <p className="text-[#b9c1c3]">Total Volume</p>
          <motion.p className="text-lg" variants={attrItems}>
            {data.market_data.total_volume.usd.toLocaleString()}
          </motion.p>
        </motion.div>
        <motion.div>
          <p className="text-[#b9c1c3]">Market Cap</p>
          <motion.p className="text-lg" variants={attrItems}>
            {data.market_data.market_cap.usd.toLocaleString()}
          </motion.p>
        </motion.div>
        {/* <div className="flex flex-col space-y-1">
          <p className="text-[#b9c1c3]">Total Volume</p>
          <p className="text-lg">
            {data.market_data.total_volume.usd.toLocaleString()}
          </p>
        </div> */}
        <motion.div>
          <p className="text-[#b9c1c3]">Total Supply</p>
          <motion.p className="text-lg" variants={attrItems}>
            {data.market_data.total_supply
              ? data.market_data.total_supply.toLocaleString()
              : "NaN"}
          </motion.p>
        </motion.div>
      </motion.div>
    )
  );
};

export default Info;
