import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function InformationGallery() {
  return (
    <section className="bg-white pt-6">
      <div className="w-11/12 mx-auto lg:flex lg:w-9/12">
        <Four />
        <StaticImage
          src="../../images/informationGallery/ig1.jpg"
          alt="Information Main Photo"
          className="w-full mt-6 lg:mt-0"
        />
      </div>
    </section>
  );
}

function Four() {
  return (
    <div className="flex flex-col lg:flex-row lg:mr-6">
      <div className="lg:mr-3">
        <StaticImage
          src="../../images/informationGallery/ig1.jpg"
          alt="Information Main Photo"
          className="mb-6 w-full"
        />
        <StaticImage
          src="../../images/informationGallery/ig2.jpg"
          alt="Information Main Photo"
          className="w-full -mb-6"
        />
      </div>
      <div className="mt-12 lg:mt-0">
        <StaticImage
          src="../../images/informationGallery/ig3.jpg"
          alt="Information Main Photo"
          className="mb-6 w-full"
        />
        <StaticImage
          src="../../images/informationGallery/ig4.jpg"
          alt="Information Main Photo"
          className="w-full"
        />
      </div>
    </div>
  );
}
