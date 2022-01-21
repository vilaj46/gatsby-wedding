import React from "react";
import Leaf from "./Leaf";
import Nav from "./Nav";

export default function Header({location}) {
  const { pathname } = location;
  return (
    <header className="pb-12">
      <Leaf />
      <h1 className="pb-12 text-4xl uppercase text-center tracking-widest font-bold overflow-hidden eaves">
        Danielle {<br />}
        <span className="lowercase quickPen">and</span>
        {<br />} Julian
      </h1>
      <Nav pathname={pathname} />
    </header>
  );
}
