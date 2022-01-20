import React from "react";

import data from "../../data";

export default function Information() {
  const { infos } = data;
  return (
    <section className="pb-24">
      <div className="container mx-auto" style={{ fontFamily: "Cinzel" }}>
        <h2 className="text-center text-3xl pt-24 pb-24">
          Ceremony & {<br />} Celebration
        </h2>
        <div
          className="flex justify-between"
        >
          {infos.map((info) => {
            return <Block info={info} key={info.label} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Block({ info }) {
  const { label, time, desc, icon } = info;

  return (
    <div className="w-1/3">
      <img src={icon} alt={label} className="block mx-auto" />
      <h3 className="mt-3 font-bold offBlack text-center">{label}</h3>
      <p className="mt-3 text-center">{time}</p>
      <p className="mt-3 text-center">{desc}</p>
    </div>
  );
}
