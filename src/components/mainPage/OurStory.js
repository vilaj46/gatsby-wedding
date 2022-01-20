import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import data from "../../data";

export default function OurStory({ image }) {
  const { ourStory } = data;
  return (
    <section
      className="container w-11/12 mx-auto mt-12"
    >
      <div>
        <em className="italic mb-3 block">For those who didn't know</em>
        <p className="mb-3 text-xl font-bold offBlack">Our Story</p>
        <p className="mb-3">{ourStory}</p>
      </div>
      <SideImage />
    </section>
  );
}

function SideImage() {
  return (
    <div className="w-full">
      <StaticImage
        src="../../images/ourStoryMainImage.jpg"
        alt="Our Story <<Insert Cute Image Here>>"
      />
    </div>
  );
}
