import React, { useEffect, useState } from "react";

const Card = ({
  icon,
  id,
  price,
  priceChange,
  percentage,
  symbol,
  onClick,
}) => {
  const [drop, setDrop] = useState(false);

  useEffect(() => {
    if (percentage < 0) {
      setDrop(true);
    }
  }, [percentage]);

  return (
    <div
      className="bg-dark rounded-xl flex flex-col items-start justify-between p-4 hover:bg-light cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full flex flex-row space-x-2 items-center justify-start text-lg">
        <div className="w-5 h-5">{icon}</div>
        <h1 className="font-semibold">{id}</h1>
        <h1 className="text-[#b9c1c3] text-sm uppercase">({symbol})</h1>
      </div>
      <div className="w-full flex flex-col space-y-2 mt-4">
        <p>${price && price.toLocaleString()}</p>
        <div className="w-full flex flex-row items-start space-x-2 text-sm">
          <p className="text-[#b9c1c3]">
            {(Math.round(priceChange * 100) / 100).toLocaleString()}
          </p>
          <p
            className={`${
              drop ? "text-red-500" : "text-green-500"
            } font-semibold`}
          >
            {Math.round(percentage * 100) / 100}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
