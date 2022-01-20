import React from "react";
import Img from "gatsby-image";

import data from "../../data";

export default function InformationGallery({ images, specialImage }) {
  const four = getFourImages(images);
  const { fluid } = specialImage.childImageSharp;
  return (
    <section className="flex">
      <Four images={four} />
      <div style={{height: "500px", width: "410px"}}>
      <Img fluid={fluid} />
      </div>
    </section>
  );
}

function Four({ images }) {
  const split1 = images.slice(0, images.length / 2);
  const split2 = images.slice(images.length / 2, images.length);
  return (
    <div className="flex">
      <div>
        {split1.map((img) => {
          const { fluid } = img.node.childImageSharp;
          return (
            <div
              style={{
                maxHeight: "240px",
                maxWidth: "200px",
                height: "240px",
                width: "200px",
              }}
              className="overflow-hidden"
            >
              <Img fluid={fluid} />
            </div>
          );
        })}
      </div>
      <div>
        {split2.map((img) => {
          const { fluid } = img.node.childImageSharp;
          return (
            <div
              style={{
                maxHeight: "240px",
                maxWidth: "200px",
                height: "240px",
                width: "200px",
              }}
              className="overflow-hidden"
            >
              <Img fluid={fluid} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getFourImages(images) {
  return images.filter((img) => {
    try {
      const { originalName } = img.node.childImageSharp.fluid;
      if (originalName.includes("ig")) {
        return img;
      }
    } catch {
      // do nothing
    }
  });
}
