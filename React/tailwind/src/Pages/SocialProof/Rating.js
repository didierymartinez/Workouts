import React from "react";
import star from "./images/icon-star.svg";

export const Rating = ({stars, text}) => {

    

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-[#F7F2F8] p-4 mb-4 rounded-lg lg:w-[445px]">
      <div className="flex mb-3 space-x-2">
        {
            ([ ...Array(stars).keys() ]).map( (e,i) => (                
                <img key={i} src={star} alt="" />
            ))
        }
      </div>
      <h3 className="text-xs font-semibold">{text}</h3>
    </div>
  );
};
