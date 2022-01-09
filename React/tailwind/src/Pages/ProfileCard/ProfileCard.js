import React from "react";
import { SimpleLayout } from "../../Components/SimpleLayout";
import { Gauge } from "./Gauge";
import imagevictor from "./images/image-victor.jpg";
import patterncard from "./images/bg-pattern-card.svg";
import "./style.css"

export const ProfileCard = () => {
  return (
    <>
      <SimpleLayout
        mainclass="background-profilecard font-kumbh bg-[#19A1AD]"
        classes="w-[350px] h-[374px] flex flex-col bg-white rounded-xl text-[#2d3248]"
      >
        <section className="flex-1 relative">
          <img className="absolute top-0 left-0 rounded-t-lg" src={patterncard} alt="" />
          <div className="absolute left-[30%] top-[30%] flex flex-col items-center">
            <img
              className="rounded-full border-[6px] border-white mb-4"
              src={imagevictor}
              alt=""
            />
            <p className="text-xl font-bold">
              Victor Crest <span className="font-normal text-gray-400">26</span>
            </p>
            <span className="text-gray-400">London</span>
          </div>
        </section>
        <section className="flex justify-around items-center h-[88px] border-t border-gray-400">
          <Gauge quantity="80K" text="Followers"></Gauge>
          <Gauge quantity="803K" text="Likes"></Gauge>
          <Gauge quantity="1.4K" text="Photos"></Gauge>
        </section>
      </SimpleLayout>
      ;
    </>
  );
};
