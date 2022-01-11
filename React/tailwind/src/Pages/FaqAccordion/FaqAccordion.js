import React from "react";
import { SimpleLayout } from "../../Components/SimpleLayout";
import { FaqItem } from "./FaqItem";
import womanMobile from './images/illustration-woman-online-mobile.svg'
import womanDesktop from './images/illustration-woman-online-desktop.svg'
import box from './images/illustration-box-desktop.svg'
import "./styles.css"

export const FaqAccordion = () => {
  return (
    <SimpleLayout
      mainclass="bg-gradient-to-b from-[#af67e9] to-[#6565e7] font-kumbh"
      classes="relative w-[326px] h-[535px] lg:w-[920px] lg:h-[509-px] flex flex-col lg:flex-row bg-white px-[22px] lg:px-0 rounded-xl"
    >
      <div className=" relative lg:overflow-x-hidden bgImagen flex justify-center flex-1 max-h-[100px] lg:max-h-full">
        <img className="lg:hidden w-4/5 absolute -top-[100%]" src={womanMobile} alt="" />
        <img className="hidden lg:block absolute top-[10%] -left-[18%]" src={womanDesktop} alt="" />
      </div>
        <img className="hidden lg:block absolute top-[35%] -left-[14%]" src={box} alt="" />
      <div className="flex-1 flex flex-col justify-start lg:pt-10 ">
        <h1 className="text-4xl font-bold text-center lg:text-left my-5">FAQ</h1>
        <FaqItem
          summary={"How manyu team members can I invite?"}
          text={"Resulto of the text"}
        />
        <FaqItem
          summary={"What is the maximum file upsload size?"}
          text={
            "No more than 2GB. All files in your account must fit your allotted storage space."
          }
        />
        <FaqItem
          summary={"How do I reset my password?"}
          text={"Resulto of the text"}
        />
        <FaqItem
          summary={"Can I cancel my subscription?"}
          text={"Resulto of the text"}
        />
        <FaqItem
          summary={"Do you provide additional support?"}
          text={"Resulto of the text"}
        />
      </div>
    </SimpleLayout>
  );
};
