import React from 'react'

import equilibrium from "./images/image-equilibrium.jpg";
import iconview from "./images/icon-view.svg";


export const MainImage = () => {
    return (
        <div className="cursor-pointer w-full h-3/6 bg-[#00fff7] rounded-lg flex justify-center items-center group">
          <img src={equilibrium} alt="" className="w-full h-full rounded-lg group-hover:opacity-50" />
          <img src={iconview} className="hidden group-hover:flex absolute" alt="" />
        </div>
    )
}
