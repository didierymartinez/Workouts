import React from "react";
import { Card } from "./Card";

import iconSupervisor from "./images/icon-supervisor.svg";
import iconTeamBuilder from "./images/icon-team-builder.svg";
import iconKarma from "./images/icon-karma.svg";
import iconCalculator from "./images/icon-calculator.svg";

export const FourCards = () => {
  return (
    <div className="font-poppins grid grid-cols-1 grid-rows-[20%_1fr] px-10 text-gray-700 h-screen justify-items-center">
      <header className="col-span-3 place-self-center self-end">
        <h1 className="text-xl font-light lg:text-4xl text-center">
          Reliable, efficient delivery{" "}
        </h1>
        <h2 className="text-xl lg:text-4xl font-bold text-center mb-5">
          Powered by Technology
        </h2>
        <p className="text-xs font-thin w-[240px] lg:w-[430px] text-center">
          Our Artificial intelligencee powered tools use millions of project
          data points to ensure that your project is successful
        </p>
      </header>
      <div className="grid grid-flow-row xl:grid-flow-col xl:gap-8 pt-5">
        <div className=" xl:place-self-center">
          <Card
            title="Supervisor"
            text="Monitors activity to identify project roadblocks"
            icon={iconSupervisor}
            color="hsl(180, 62%, 55%)"
          ></Card>
        </div>
        <div className="xl:place-self-center">
          <Card
            title="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            icon={iconTeamBuilder}
            color="hsl(0, 78%, 62%)"
          ></Card>
          <Card
            title="Karma"
            text="Regularly evaluates our talent to ensure quality"
            icon={iconKarma}
            color="hsl(34, 97%, 64%)"
          ></Card>
        </div>
        <div className="xl:place-self-center">
          <Card
            title="Calculator"
            text="Uses data from past projects to provide better delivery estimates"
            icon={iconCalculator}
            color="hsl(212, 86%, 64%)"
          ></Card>
        </div>
      </div>
    </div>
  );
};
