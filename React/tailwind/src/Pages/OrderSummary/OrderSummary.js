import React from "react";
import imghero from "./images/illustration-hero.svg";
import iconmusic from "./images/icon-music.svg";

import "./styles.css";
import { SimpleLayout } from "../../Components/SimpleLayout";

export const OrderSummary = () => {
  return (
    <SimpleLayout mainclass="mainCont" classes="font-['Red Hat Display'] flex flex-col w-[450px] h-[700px] rounded-xl bg-white">
        <img src={imghero} alt="" className="rounded-t-xl" />
        <section className="flex flex-col items-center p-11 justify-between flex-1">
          <h1 className="text-3xl font-bold">Order Summary</h1>
          <p className="text-center text-lg text-gray-400">
            You can now listen to millions of songs, audiobooks, and podcast on
            any device anywhere you like!
          </p>
          <section className="flex w-full p-5 rounded-xl bg-[#F8F9FE] justify-between">
            <div className="flex">
              <img src={iconmusic} alt="" />
              <div className="ml-4 font-bold">
                Annual Plan
                <div className="font-normal text-gray-400">$59.99/year</div> 
              </div>
            </div>
            <button className="text-[#382AE1] underline hover:no-underline hover:text-[#766CF1] cursor-pointer">
              Change
            </button>
          </section>

          <button className="w-full py-4 rounded-xl text-white bg-[#382AE1] shadow-lg hover:shadow-indigo-300 hover:bg-[#766CF1]">
            Proceed to Payment
          </button>
          <button className="hover:font-bold">Cancel order</button>
        </section>
    </SimpleLayout>
  );
};
