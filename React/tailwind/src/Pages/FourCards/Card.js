import React from "react";

export const Card = ({ title, text, icon, color }) => {
  return (
    <div
      style={{ "borderTop": `solid 4px ${color}` }}
      className="flex flex-col justify-between rounded-md p-8 h-[222px] w-[310px] xl:h-[250px] xl:w-[350px] shadow-xl mb-6"
    >
      <div>
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-sm font-thin">{text}</p>
      </div>
      <div className="flex justify-end">
        <img className="w-16" src={icon} alt="" />
      </div>
    </div>
  );
};
