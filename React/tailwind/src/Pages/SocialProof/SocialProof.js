import React from "react";
import { Rating } from "./Rating";
import { Card } from "./Card";

import colton from "./images/image-colton.jpg";
import anne from "./images/image-anne.jpg";
import irene from "./images/image-irene.jpg";

export const SocialProof = () => {
  return (
    <section className="font-spartan grid place-items-center h-screen text-[#511F50] space-y-10">
      <section className="w-[325px] lg:w-3/4">
        <section className="flex flex-col lg:flex-row">
          <section className="text-center lg:text-left flex-1">
            <h1 className="text-3xl lg:text-4xl lg:mb-2 font-semibold lg:w-[400px]">
              10,000+ of our users love our products.
            </h1>
            <p className="text-[14.5px] lg:w-[450px]">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </section>
          <section className="flex-1">
            <Rating stars={5} text="Rated 5 Stars in Reviews"></Rating>
            <Rating stars={5} text="Rated 5 Stars in Report Guru"></Rating>
            <Rating stars={5} text="Rated 5 Stars in BestTech"></Rating>
          </section>
        </section>
        <section className="space-y-4 lg:space-y-0 lg:flex lg:space-x-5">
          <Card
            className="mt-0"
            image={colton}
            name="Colton Smith"
            text={`"We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent!"`}
          ></Card>
          <Card
            className="mt-5"
            image={irene}
            name="Irene Roberts"
            text={`"Customer service is always excellent and very quick turn around. 
            Completely delighted with the simplicity of the purchase and the speed of delivery"`}
            ></Card>
          <Card
            className="mt-10"
            image={anne}
            name="Anne Wallace"
            text={`"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"`}
          ></Card>
        </section>
      </section>
    </section>
  );
};
