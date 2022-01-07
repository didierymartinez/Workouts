import React from "react";

import iconethereum from "./images/icon-ethereum.svg";
import iconclock from "./images/icon-clock.svg";

export const Information = () => {
  return (
    <div className="flex flex-col justify-between h-full my-7">
      <h1 className="text-xl text-white cursor-pointer hover:text-[#00fff7] ">
        Equilibrium #3429
      </h1>
      <p className="text-lg text-[#8bacda] font-thin">
        Our Equilibrium collection promotes balance an calm.
      </p>

      <section className="flex justify-between">
        <div className="flex items-center ">
          <img className="w-3 h-4" src={iconethereum} alt="" />
          <span className="ml-2 text-[#00fff7]">0.041 ETH</span>
        </div>
        <div className="flex items-center">
          <img className="w-4 h-4" src={iconclock} alt="" />
          <span className="ml-2 font-light text-[#8bacda]">3 days left</span>
        </div>
      </section>
    </div>
  );
};
