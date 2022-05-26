import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TiArrowUp, TiArrowDown } from "react-icons/ti";
import { motion } from "framer-motion";
import Link from "next/link";

const Card = ({
  index,
  img,
  id,
  name,
  price,
  volume,
  percentage,
  symbol,
  cap,
}) => {
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    if (percentage < 0) {
      setDrop(true);
    }
  }, [percentage]);

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
    <div className="flex flex-col">
      <Link href={"/" + id}>
        <motion.div
          className={`grid grid-cols-8 flex-row items-between justify-center p-4 group  cursor-pointer bg-dark hover:bg-light transition duration-200 ease-linear`}
        >
          <div className="w-full col-span-4 flex flex-row space-x-2 items-center justify-start text-base">
            <p className="pr-4">{index + 1}</p>
            <div className="items-center justify-center flex rounded-full overflow-hidden">
              <Image width="24" height="24" src={img} className="" />
            </div>
            <h1 className="font-medium truncate">{name}</h1>
            <h1 className="text-gray  text-sm uppercase">({symbol})</h1>
          </div>
          <p className="col-span-1 flex justify-end">{priceHandler(price)}</p>
          <div
            className={`${
              drop ? "text-red-500 " : "text-green-500"
            } flex justify-end col-span-1 items-center space-x-1`}
          >
            <div> {drop ? <TiArrowDown /> : <TiArrowUp />}</div>
            <div>{(Math.round(percentage * 100) / 100).toFixed(2)}%</div>
          </div>
          <p className="text-white col-span-1 flex justify-end">
            {priceHandler(volume)}
          </p>
          <p className="text-white col-span-1 flex justify-end">
            {priceHandler(cap)}
          </p>
        </motion.div>
      </Link>
      <div className="w-full h-[1px] bg-light" />
    </div>
  );
};

export default Card;
