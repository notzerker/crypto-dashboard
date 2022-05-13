import Image from "next/image";
import React, { useEffect, useState } from "react";

const Card = ({
  index,
  img,
  id,
  price,
  volume,
  percentage,
  symbol,
  onClick,
  selected,
  cap,
}) => {
  const [drop, setDrop] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (percentage < 0) {
      setDrop(true);
    }
  }, [percentage]);

  useEffect(() => {
    if (selected) {
      if (selected === id) {
        setIsSelected(true);
      } else {
        setIsSelected(false);
      }
    }
  }, [selected]);

  const priceHandler = (price) => {
    var result = (Math.round(price * 100) / 100).toLocaleString();

    if (price >= 1000000000) {
      result = price.toString().substring(0);
    }
    return result;
  };

  return (
    <div
      className={` grid grid-cols-8 flex-row items-between justify-center p-4 group hover:text-white/50 cursor-pointer bg-dark`}
      onClick={onClick}
    >
      <div className="w-full col-span-4 flex flex-row space-x-2 items-center justify-start text-base">
        <p className="pr-4">{index + 1}</p>
        <div className="items-center justify-center flex rounded-full overflow-hidden">
          <Image
            width="24"
            height="24"
            src={img}
            className="group-hover:grayscale"
          />
        </div>
        <h1 className="font-medium truncate">{id}</h1>
        <h1 className="text-gray group-hover:text-gray/50 text-sm uppercase">
          ({symbol})
        </h1>
      </div>
      <p className="col-span-1 flex justify-end">${price.toFixed(2)}</p>
      <p
        className={`${
          drop
            ? "text-red-500 group-hover:text-red-500/50"
            : "text-green-500 group-hover:text-green-500/50"
        } flex justify-end col-span-1`}
      >
        {(Math.round(percentage * 100) / 100).toFixed(2)}%
      </p>
      <p className="text-white group-hover:text-white/50 col-span-1 flex justify-end">
        ${(Math.round(volume * 100) / 100).toLocaleString()}
      </p>
      <p className="text-white group-hover:text-white/50 col-span-1 flex justify-end">
        ${(Math.round(cap * 100) / 100).toLocaleString()}
      </p>
    </div>
  );
};

export default Card;
