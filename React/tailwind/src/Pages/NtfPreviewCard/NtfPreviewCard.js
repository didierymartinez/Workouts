import React from "react";

import { MainImage } from "./MainImage";
import { Information } from "./Information";
import { Avatar } from "./Avatar";

export const NtfPreviewCard = () => {
  return (
    <div className="font-['Outfit'] h-screen flex justify-center items-center bg-[#0d192b]">
      <main className="w-[350px] h-[596px] rounded-xl bg-[#14253d] p-5 flex flex-col justify-between">
        
        <MainImage />

        <Information />

        <Avatar />

      </main>
    </div>
  );
};
