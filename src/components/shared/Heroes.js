import React from "react";
import { Link } from "gatsby";

import data from "../../data";

export default function Heroes() {
  const { bride, groom } = data;
  return (
    <div>
      <h1 className="text-xl amberLight align-middle">
        <Link to="/" className="block mt-3">
          {bride.first} & {groom.first}
        </Link>
      </h1>
    </div>
  );
}
