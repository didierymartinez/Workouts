import React from "react";
import arrow from "./images/icon-arrow-down.svg";

export const FaqItem = ({ summary, text }) => {
  return (
    <details className="lg:w-[345px] group border-b border-gray-200 text-[#787887] py-4 ">
      <summary className=" group-open:text-black group-open:font-bold flex hover:text-amber-700 items-center justify-between cursor-pointer pb-2 text-[#4a4b5e]">
        <div className="text-[13px]">{summary}</div>
        <img
          className="w-[10px] h-[6px] group-open:rotate-180"
          src={arrow}
          alt=""
        />
      </summary>
      <div className="text-xs pr-4">{text}</div>
    </details>
  );
};
