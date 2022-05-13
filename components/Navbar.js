import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import useStore from "../lib/store";

const Navbar = () => {
  const selected = useStore((state) => state.selected);
  const setSelected = useStore((state) => state.setSelected);

  return (
    <div
      className={`bg-dark p-4 h-fit flex flex-row items-center justify-start sticky top-0`}
    >
      <svg
        width={26}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-white hover:scale-105 duration-200 ease-linear transition cursor-pointer"
      >
        <path
          d="M24.75 11.364c0 .366-.262.77-.872 1.183-.602.407-1.49.783-2.608 1.102-2.234.639-5.335 1.037-8.77 1.037-3.435 0-6.536-.399-8.77-1.037-1.119-.32-2.006-.695-2.608-1.102-.61-.412-.872-.817-.872-1.183 0-.366.262-.77.872-1.183.602-.406 1.49-.782 2.608-1.102 2.234-.638 5.335-1.036 8.77-1.036 3.435 0 6.536.398 8.77 1.036 1.119.32 2.006.696 2.608 1.102.61.413.872.817.872 1.183Z"
          strokeWidth={1}
          className="stroke-inherit"
        />
        <path
          d="M21.162 2.702c.259.26.36.73.22 1.453-.138.713-.5 1.606-1.065 2.624-1.128 2.03-3.04 4.505-5.468 6.934-2.43 2.429-4.904 4.34-6.935 5.468-1.017.565-1.91.927-2.623 1.065-.723.14-1.194.04-1.453-.22-.26-.259-.36-.73-.22-1.453.138-.713.5-1.606 1.065-2.623 1.128-2.031 3.04-4.505 5.468-6.934 2.43-2.43 4.904-4.34 6.935-5.469 1.017-.565 1.91-.927 2.623-1.065.723-.14 1.194-.039 1.453.22Z"
          className="stroke-inherit"
          strokeWidth={1}
        />
        <path
          d="M21.162 20.026c-.259.26-.73.36-1.453.22-.713-.138-1.606-.5-2.623-1.065-2.031-1.128-4.505-3.039-6.935-5.468-2.429-2.43-4.34-4.903-5.468-6.934-.565-1.018-.927-1.91-1.065-2.624-.14-.723-.04-1.194.22-1.453.259-.259.73-.36 1.453-.22.713.138 1.606.5 2.623 1.065 2.031 1.128 4.505 3.04 6.935 5.469 2.429 2.429 4.34 4.903 5.468 6.934.565 1.017.927 1.91 1.065 2.623.14.723.039 1.194-.22 1.453Z"
          className="stroke-inherit"
          strokeWidth={1}
        />
        <circle
          cx={12.236}
          cy={11.574}
          r={9.571}
          className="stroke-inherit"
          strokeWidth={1}
        />
      </svg>
      {/* <div className="flex flex-row items-center justify-center w-full h-full space-x-8 relative">
        <div
          className={` w-8 h-8 group items-center justify-center flex rounded-md z-10`}
          onClick={() => setSelected("btc")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="cursor-pointer w-full h-full"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx={16} cy={16} r={16} className={` fill-none`} />
              <path
                className="fill-white group-hover:fill-gray"
                fillRule="nonzero"
                d="M23.189 14.02c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84-1.728-.43-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009-2.384-.595-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045-1.13 4.532c-.086.212-.303.531-.793.41.018.025-1.256-.313-1.256-.313l-.858 1.978 2.25.561c.418.105.828.215 1.231.318l-.715 2.872 1.727.43.708-2.84c.472.127.93.245 1.378.357l-.706 2.828 1.728.43.715-2.866c2.948.558 5.164.333 6.097-2.333.752-2.146-.037-3.385-1.588-4.192 1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"
              />
            </g>
          </svg>
        </div>
        <div
          className={` w-8 h-8 group items-center justify-center flex rounded-md z-10`}
          onClick={() => setSelected("eth")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="cursor-pointer"
          >
            <g fill="none" fillRule="evenodd">
              <circle cx={16} cy={16} r={16} className={`fill-none`} />
              <g
                className="fill-white group-hover:fill-gray"
                fillRule="nonzero"
              >
                <path fillOpacity={0.602} d="M16.498 4v8.87l7.497 3.35z" />
                <path d="M16.498 4 9 16.22l7.498-3.35z" />
                <path fillOpacity={0.602} d="M16.498 21.968v6.027L24 17.616z" />
                <path d="M16.498 27.995v-6.028L9 17.616z" />
                <path
                  fillOpacity={0.2}
                  d="m16.498 20.573 7.497-4.353-7.497-3.348z"
                />
                <path fillOpacity={0.602} d="m9 16.22 7.498 4.353v-7.701z" />
              </g>
            </g>
          </svg>
        </div>
        <div
          className={` w-8 h-8 group items-center justify-center flex rounded-md z-10`}
          onClick={() => setSelected("bnb")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="cursor-pointer"
          >
            <g fill="none">
              <circle cx={16} cy={16} r={16} className={`fill-none`} />
              <path
                className="fill-white group-hover:fill-gray"
                d="M12.116 14.404 16 10.52l3.886 3.886 2.26-2.26L16 6l-6.144 6.144 2.26 2.26zM6 16l2.26-2.26L10.52 16l-2.26 2.26L6 16zm6.116 1.596L16 21.48l3.886-3.886 2.26 2.259L16 26l-6.144-6.144-.003-.003 2.263-2.257zM21.48 16l2.26-2.26L26 16l-2.26 2.26L21.48 16zm-3.188-.002h.002V16L16 18.294l-2.291-2.29-.004-.004.004-.003.401-.402.195-.195L16 13.706l2.293 2.293z"
              />
            </g>
          </svg>
        </div>
        <div
          className={` w-8 h-8 group items-center justify-center flex rounded-md z-10`}
          onClick={() => setSelected("usdc")}
        >
          <svg
            width={32}
            height={32}
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
          >
            <g fill="none">
              <circle cx={16} cy={16} r={16} className={`fill-none`} />
              <g className="fill-white group-hover:fill-gray">
                <path d="M20.022 18.124c0-2.124-1.28-2.852-3.84-3.156-1.828-.243-2.193-.728-2.193-1.578 0-.85.61-1.396 1.828-1.396 1.097 0 1.707.364 2.011 1.275a.458.458 0 0 0 .427.303h.975a.416.416 0 0 0 .427-.425v-.06a3.04 3.04 0 0 0-2.743-2.489V9.142c0-.243-.183-.425-.487-.486h-.915c-.243 0-.426.182-.487.486v1.396c-1.829.242-2.986 1.456-2.986 2.974 0 2.002 1.218 2.791 3.778 3.095 1.707.303 2.255.668 2.255 1.639 0 .97-.853 1.638-2.011 1.638-1.585 0-2.133-.667-2.316-1.578-.06-.242-.244-.364-.427-.364h-1.036a.416.416 0 0 0-.426.425v.06c.243 1.518 1.219 2.61 3.23 2.914v1.457c0 .242.183.425.487.485h.915c.243 0 .426-.182.487-.485V21.34c1.829-.303 3.047-1.578 3.047-3.217z" />
                <path d="M12.892 24.497c-4.754-1.7-7.192-6.98-5.424-11.653.914-2.55 2.925-4.491 5.424-5.402.244-.121.365-.303.365-.607v-.85c0-.242-.121-.424-.365-.485-.061 0-.183 0-.244.06a10.895 10.895 0 0 0-7.13 13.717c1.096 3.4 3.717 6.01 7.13 7.102.244.121.488 0 .548-.243.061-.06.061-.122.061-.243v-.85c0-.182-.182-.424-.365-.546zm6.46-18.936c-.244-.122-.488 0-.548.242-.061.061-.061.122-.061.243v.85c0 .243.182.485.365.607 4.754 1.7 7.192 6.98 5.424 11.653-.914 2.55-2.925 4.491-5.424 5.402-.244.121-.365.303-.365.607v.85c0 .242.121.424.365.485.061 0 .183 0 .244-.06a10.895 10.895 0 0 0 7.13-13.717c-1.096-3.46-3.778-6.07-7.13-7.162z" />
              </g>
            </g>
          </svg>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
