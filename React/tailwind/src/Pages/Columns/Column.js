import React from "react";

export const Column = ({ image, title, text, color }) => {
  return (
    <div
      className={`
       bg-[#${color}] px-10 py-12 text-white 
       first:rounded-t-lg last:rounded-b-lg 
       lg:first:rounded-none lg:first:rounded-l-lg lg:last:rounded-none lg:last:rounded-r-lg 
       h-[442px] min-w-[307px] 
       lg:h-[500px] 
       flex flex-col justify-between`}
    >
      <div>
        <img src={image} alt="" className="w-[64px] h-[40px]" />
        <h1 className="text-3xl font-big uppercase my-8">
          {title}
        </h1>
        <p className="font-lexend font-light text-[#f2f2f2]">{text}</p>
      </div>
      <button
        className={`bg-white rounded-3xl text-[#${color}] py-2 w-[146px] hover:bg-transparent border-white border-2 hover:text-white`}
      >
        {" "}
        Learn More
      </button>
    </div>
  );
};
