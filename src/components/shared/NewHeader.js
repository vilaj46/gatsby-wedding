import React, { useState } from "react";

// Components
import Heroes from "./Heroes";
import NavBar from "./Navbar";

import data from "../../data";

import Item from "./Item";

export default function NewHeader({ path }) {
  const [isOpen, setOpen] = useState(false);

  const { nav } = data;
  return (
    <header className="w-full fixed z-50 py-10 bg-white">
      <div className="w-9/12 mx-auto flex justify-around md:justify-between relative">
        <Heroes />
        <NavBar path={path} isOpen={isOpen} setOpen={setOpen} />
      </div>
      <ul className={`w-9/12 mx-auto ${isOpen ? "block" : "hidden"}`}>
        {nav.map((page) => {
          return (
            <Item
              hover={path}
              href={page.href}
              label={page.label}
              key={page.href}
              hamburger={true}
            />
          );
        })}
      </ul>
    </header>
  );
}
