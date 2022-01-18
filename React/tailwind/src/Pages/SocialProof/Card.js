import React from "react";

export const Card = ({ image, name, text, className }) => {
  return (
    <section className={`text-[#f7f2f7] bg-[#511F50] p-[37.5px] rounded-lg ${className}` }>
      <section className="flex items-center mb-6 w-[250px]">
        <img className="rounded-full w-14 h-14 mr-6" src={image} alt="" />
        <div className="text-sm">
          <h3 className="font-bold mb-1">{name}</h3>
          <h4 className="text-[#ee68a4]">Verified Buyer</h4>
        </div>
      </section>
      <p className="text-xs leading-5">
        {text}
      </p>
    </section>
  );
};
