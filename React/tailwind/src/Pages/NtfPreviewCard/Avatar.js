import React from 'react'

import avatar from "./images/image-avatar.png";

export const Avatar = () => {
    return (
        <section className="py-5 border-t border-t-slate-700 flex items-center">
          <img
            className="w-9 h-9 border border-white rounded-full"
            src={avatar}
            alt=""
          />
          <p className="ml-5 text-[#8bacda]">
            Creation of{" "}
            <span className="text-white hover:text-[#00fff7] cursor-pointer">
              Jules Wyvern
            </span>{" "}
          </p>
        </section>
    )
}
