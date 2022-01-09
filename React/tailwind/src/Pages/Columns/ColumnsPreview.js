import React from "react";
import { SimpleLayout } from "../../Components/SimpleLayout";
import { Column } from "./Column";

import iconSedans from "./images/icon-sedans.svg";
import iconLuxury from "./images/icon-luxury.svg";
import iconSuvs from "./images/icon-suvs.svg";

const columns = [
  {
    icon: iconSedans,
    title: "sedans",
    text: "Choose a sedan for its affordability and excelent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "E28525",
  },
  {
    icon: iconSuvs,
    title: "suvs",
    text: "Take an SUV for its spacious interio, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "016972",
  },
  {
    icon: iconLuxury,
    title: "luxury",
    text: "Cruise in the vest car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    color: "00403F",
  },
];

export const ColumnsPreview = () => {
  return (
    <div>
      <SimpleLayout classes="rounded-xl flex flex-col lg:flex-row w-[327px] lg:w-[920px]">
        { columns.map(({icon, title, text, color}) => (
            <Column
              key={title}
              image={icon}
              title={title}
              text={text}
              color={color}
            ></Column>
        )) }
      </SimpleLayout>
    </div>
  );
};
