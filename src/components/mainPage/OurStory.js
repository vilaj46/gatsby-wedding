import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import data from "../../data";

export default function OurStory({ image }) {
  const { ourStory } = data;
  return (
    <section className="mt-24 flex justify-between max-h-96 overflow-hidden">
      <SideImage />
      <div className="w-2/4">
        <p className="italic">For those who didn't know</p>
        <br />
        <p className="text-xl font-bold offBlack">Our Story</p>
        <br />
        <br />
        <p>{ourStory}</p>
      </div>
    </section>
  );
}

function SideImage() {
  return <StaticImage src="../../images/ourStoryImage.jpg" alt="Our Story <<Insert Cute Image Here>>"/>
}
