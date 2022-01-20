import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function InformationGallery() {
  return (
    <section className="bg-white">
      <div className="flex w-9/12 mx-auto">
        <Four />
        <div>
          <StaticImage
            src="../../images/informationGallery/special.jpg"
            alt="Information Main Photo"
          />
        </div>
      </div>
    </section>
  );
}

function Four() {
  return (
    <div className="flex">
      <div className="mb-3">
        <StaticImage
          src="../../images/informationGallery/ig1.jpg"
          alt="Information Main Photo"
          className="mb-3"
        />
        <StaticImage
          src="../../images/informationGallery/ig2.jpg"
          alt="Information Main Photo"
        />
      </div>
      <div>
        <StaticImage
          src="../../images/informationGallery/ig3.jpg"
          alt="Information Main Photo"
          className="mb-3"
        />
        <StaticImage
          src="../../images/informationGallery/ig4.jpg"
          alt="Information Main Photo"
        />
      </div>
    </div>
  );
}
