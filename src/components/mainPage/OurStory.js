import React from "react";
import Img from "gatsby-image";

import data from "../../data";

export default function OurStory({ image }) {
  const { ourStory } = data;
  return (
    <section className="mt-24 flex justify-between max-h-96 overflow-hidden">
      <SideImage image={image} />
      <div className="w-2/4">
        <p className="italic">For those who didn't know</p>
        <br />
        <p className="text-xl font-bold offBlack">
          Our Story
        </p>
        <br />
        <br />
        <p>{ourStory}</p>
      </div>
    </section>
  );
}

function SideImage({ image }) {
  return (
    <div className="w-1/3 max-h-96">
      <Img fluid={image.childImageSharp.fluid} className="max-h-96" />
    </div>
  );
}
