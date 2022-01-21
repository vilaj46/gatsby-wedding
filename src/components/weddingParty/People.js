import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import data from "../../data";

import ImageBorder from "../../newComponents/ImageBorder";

export default function People() {
  const { weddingParty } = data;

  return (
    <div>
      <div className="md:flex justify-between md:mb-6 lg:justify-center">
        <Person person={findPerson(weddingParty, "matron")} />
        <Person person={findPerson(weddingParty, "bestman")} />
      </div>
      <div className="md:flex justify-between md:mb-6 lg:justify-center">
        <Person person={findPerson(weddingParty, "mh1")} />
        <Person person={findPerson(weddingParty, "gm1")} />
      </div>
      <div className="md:flex justify-between md:mb-6 lg:justify-center">
        <Person person={findPerson(weddingParty, "mh2")} />
        <Person person={findPerson(weddingParty, "gm2")} />
      </div>
      <div className="md:flex justify-between md:mb-6 lg:justify-center">
        <Person person={findPerson(weddingParty, "mh3")} />
        <Person person={findPerson(weddingParty, "gm3")} />
      </div>
      <div className="md:flex justify-between">
        <Person person={findPerson(weddingParty, "mh4")} />
        <Person person={findPerson(weddingParty, "gm4")} />
        <Person person={findPerson(weddingParty, "mh5")} />
      </div>
    </div>
  );
}

function findPerson(arr, key) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    const person = arr[i];
    const { search } = person;
    if (key === search) {
      index = i;
      break;
    }
  }

  return arr[index];
}

function Person({ person }) {
  return (
    <div className="text-center mb-6 lg:mx-12">
      <p className="eaves uppercase">{person.name}</p>
      <p className="quickPen mb-3">{person.title}</p>
      <ImageBorder>
        <Pic person={person} />
      </ImageBorder>
    </div>
  );
}

function Pic({ person }) {
  switch (person.search) {
    case "bestman":
      return (
        <StaticImage src="../../images/weddingParty/bestMan.jpg" alt="Pic" />
      );
    case "gm1":
      return (
        <StaticImage src="../../images/weddingParty/groomsMan1.jpg" alt="Pic" />
      );
    case "gm2":
      return (
        <StaticImage src="../../images/weddingParty/groomsMan2.jpg" alt="Pic" />
      );
    case "gm3":
      return (
        <StaticImage src="../../images/weddingParty/groomsMan3.jpg" alt="Pic" />
      );
    case "gm4":
      return (
        <StaticImage src="../../images/weddingParty/groomsMan4.jpg" alt="Pic" />
      );
    case "mh1":
      return (
        <StaticImage src="../../images/weddingParty/maidHonor1.jpg" alt="Pic" />
      );
    case "mh2":
      return (
        <StaticImage src="../../images/weddingParty/maidHonor2.jpg" alt="Pic" />
      );
    case "mh3":
      return (
        <StaticImage src="../../images/weddingParty/maidHonor3.jpg" alt="Pic" />
      );
    case "mh4":
      return (
        <StaticImage src="../../images/weddingParty/maidHonor4.jpg" alt="Pic" />
      );
    case "mh5":
      return (
        <StaticImage src="../../images/weddingParty/maidHonor5.jpg" alt="Pic" />
      );
    default:
      return (
        <StaticImage
          src="../../images/weddingParty/matronHonor.png"
          alt="Pic"
        />
      );
  }
}
