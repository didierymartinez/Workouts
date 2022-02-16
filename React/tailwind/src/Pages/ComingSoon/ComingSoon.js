import React, { useRef, useState } from "react";

import logo from "./images/logo.svg";
import iconError from "./images/icon-error.svg";
import arrow from "./images/icon-arrow.svg";
import heromobile from "./images/hero-mobile.jpg";
import herodesktop from "./images/hero-desktop.jpg";

import "./styles.css";

const isValid = (mail) => {
  return /\S+@\S+\.\S+/gi.test(mail);
};

export const ComingSoon = () => {
  const emailInput = useRef();
  const [invalid, setInvalid] = useState(false);
  const handleClick = () => {
    setInvalid(!isValid(emailInput.current.value));
  };

  return (
    <main className="commingsoon w-full h-screen flex font-josefin">
      <aside className="md:pl-[163px] md:pr-[218px] md:pt-[64px] md:pb-[138px] w-[830px] flex flex-1 flex-col justify-between">
        <img className="flex-base md:w-fit w-1/3 my-6 mx-6" src={logo} alt="" />
        <div className="text-center md:text-left w-full">
          <img className="md:hidden w-full mb-16" src={heromobile} alt="" />
          <div className="px-20 md:px-0 pb-10 md:pb-0">
            <h1 className="text-4xl md:text-6xl font-thin tracking-widest text-[#ce9797]">
              WE'RE
            </h1>
            <h2 className="font-medium text-4xl md:text-6xl tracking-widest text-[#423a3a]">
              COMING SOON
            </h2>
            <p className="text-[#ce9797] w-full pt-5 md:pr-[80px]">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
            <div className="relative mt-10 h-[60px]">
              <input
                ref={emailInput}
                className="rounded-full text-lg pl-8 h-full border border-[#ce9797] placeholder:text-[#ce9797] w-full"
                type="text"
                placeholder="Email Address"
              ></input>
              <div className="flex justify-center items-center h-full absolute right-0 bottom-0">
                {invalid && (
                  <img className="h-fit mr-5" src={iconError} alt="" />
                )}
                <button
                  onClick={handleClick}
                  className="rounded-full h-full w-[100px] bg-gradient-to-r from-[#f8bfbf] to-[#ee8c8c] hover:from-[hsl(0, 100%, 98%)] hover:to-[#ee8b8b] flex justify-center items-center"
                >
                  <img src={arrow} alt="" />
                </button>
              </div>
              {invalid && (
                <div className="text-sm text-[#DA0000] ml-8 mt-4">
                  Please provide a valid email
                </div>
              )}
            </div>
          </div>
        </div>
      </aside>
      <aside className="hidden md:block flex-1"></aside>
    </main>
  );
};
