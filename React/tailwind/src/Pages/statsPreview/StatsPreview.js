import React from "react";
import './styles.css'
import { Quantity } from "./Quantity";

export const StatsPreview = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#0A0C1B] text-gray-100 tracking-wider">
      <main className="w-[330px] h-[780px] lg:w-[1110px] lg:h-[446px] flex flex-col lg:flex-row-reverse bg-[#1C1938] rounded-xl">
        <section className="bg-container flex-1 rounded-t-xl lg:rounded-r-xl lg:rounded-tl-none max-h-60 lg:max-h-max ">
          
        </section>
        <section className="flex flex-col items-center text-center lg:text-left lg:items-start justify-between flex-1 p-6 lg:p-14">
          <h1 className="text-2xl lg:text-4xl font-bold tracking-wider  w-11/12">
            Get <span className="text-[#A25DD1]">insights</span> that help your bussiness grow.
          </h1>
          <p className="text-sm font-thin tracking-widest text-gray-400 my-8 w-5/6 lg:mb-20">
            Discover the benefits of data analitycs and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <section className="flex flex-col lg:flex-row justify-between flex-1 w-5/6">
            <Quantity quantity="10k+" text="companies"/>
            <Quantity quantity="314" text="templates"/>
            <Quantity quantity="12M+" text="queries"/>
          </section>
        </section>
      </main>
    </div>
  );
};
