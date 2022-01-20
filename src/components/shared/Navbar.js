import React from "react";

import Hamburger from "hamburger-react";

import data from "../../data";

import Item from "./Item";

export default function NavBar({ path, isOpen, setOpen }) {
  const { nav } = data;
  
  return (
    <nav>
      <div className="block md:hidden bg-white">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      <ul className="hidden md:flex mt-3 cinzel">
        {nav.map((page) => {
          return (
            <Item
              hover={path}
              href={page.href}
              label={page.label}
              key={page.href}
            />
          );
        })}
      </ul>
    </nav>
  );
}


