import React from "react";

import data from "../../data";

export default function Heroes() {
  const { bride, groom } = data;
  return (
    <section className="pt-12 pb-12 mt-12 text-center ivory">
      <h2 className="text-3xl cinzel">
        {bride.first} & {groom.first}
      </h2>
    </section>
  );
}
