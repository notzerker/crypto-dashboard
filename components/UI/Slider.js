import React, { useRef, useState } from "react";
import useStore from "../../lib/store";

const Slider = ({ data }) => {
  const [tabBoundingBox, setTabBoundingBox] = useState(null);
  const [wrapperBoundingBox, setWrapperBoundingBox] = useState(null);
  const [highlightedTab, setHighlightedTab] = useState(null);
  const [isHoveredFromNull, setIsHoveredFromNull] = React.useState(true);
  const [market, setMarket] = useState(data[0].value);

  const highlightRef = useRef(null);
  const wrapperRef = useRef(null);

  const resetHighlight = () => {
    setHighlightedTab(null);
  };

  const repositionHighlight = (e, tab) => {
    setTabBoundingBox(e.target.getBoundingClientRect());
    setWrapperBoundingBox(wrapperRef.current.getBoundingClientRect());
    setIsHoveredFromNull(!highlightedTab);
    setHighlightedTab(tab.value);
  };

  return (
    <div
      className=" relative flex flex-row"
      ref={wrapperRef}
      onMouseLeave={resetHighlight}
    >
      <div
        className={`${
          tabBoundingBox && wrapperBoundingBox && isHoveredFromNull
            ? "duration-0"
            : "duration-150"
        } ${
          tabBoundingBox && wrapperBoundingBox && highlightedTab
            ? "opacity-1"
            : "opacity-0"
        } ${
          tabBoundingBox &&
          wrapperBoundingBox &&
          highlightedTab === "crypto" &&
          "translate-x-0 w-28"
        } ${
          tabBoundingBox &&
          wrapperBoundingBox &&
          highlightedTab === "defi" &&
          "translate-x-28 w-28"
        }
          ${
            tabBoundingBox &&
            wrapperBoundingBox &&
            highlightedTab === "nft" &&
            "translate-x-56 w-28"
          }    ${
          tabBoundingBox &&
          wrapperBoundingBox &&
          highlightedTab === "metaverse" &&
          "translate-x-[21rem] w-28"
        }    ${
          tabBoundingBox &&
          wrapperBoundingBox &&
          highlightedTab === "solana" &&
          "translate-x-[28rem] w-28"
        }    ${
          tabBoundingBox &&
          wrapperBoundingBox &&
          highlightedTab === "avalanche" &&
          "translate-x-[35rem] w-28"
        } absolute bg-light h-3/4 rounded-lg top-[6px] left-0 z-10`}
        ref={highlightRef}
      />
      {data.map((tab) => (
        <div
          className={`${
            market === tab.value ? "border-white" : "border-transparent"
          } cursor-pointer w-28 px-2 py-4 items-center border-b-2 justify-center flex text-xs select-none z-20 transition duration-150 ease-linear`}
          key={tab.value}
          onMouseOver={(ev) => repositionHighlight(ev, tab)}
          onClick={() => setMarket(tab.value)}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default Slider;
