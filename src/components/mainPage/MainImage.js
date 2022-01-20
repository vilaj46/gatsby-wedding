import React from "react";
// import Img from "gatsby-image"
import { StaticImage } from "gatsby-plugin-image";

import data from "../../data";

export default function MainImage() {
  const { bride, groom } = data;
  return (
    <div className="relative">
      <div className="z-40 text-white absolute left-0 right-0 top-2/4 transform -translate-y-1/2 cinzelDecorative">
        <p
          className="text-center text-3xl md:text-5xl"
        >
          {bride.first} {groom.first}
          <br />
          <br />
          <span className="block text-base md:text-2xl">
            Are getting married
          </span>
          <span className="block text-base md:text-2xl">26th November, 2021 | 11:00 AM</span>
        </p>
      </div>
      <div className="z-0">
        <StaticImage
          src="../../images/main.jpg"
          alt="Danielle and Julian are in LOVE!"
        />
      </div>
    </div>
  );
}
