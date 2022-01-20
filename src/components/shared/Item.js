import React, { useState } from "react";
import { Link } from "gatsby";

function Item({ href, label, hover, hamburger = false }) {
  const helper = (href) => {
    if (href === "/") {
      return href;
    } else if (href.endsWith("/")) {
      return href.slice(0, href.length - 1);
    } else {
      return href;
    }
  };

  const pathHelped = helper(hover);
  const helped = helper(href);
  const underline = pathHelped === helped ? true : false;

  const [under, setUnder] = useState(false);

  const enter = () => {
    setUnder(true);
  };

  const leave = () => {
    setUnder(false);
  };

  const margin = hamburger ? "mb-3" : "mx-3";
  const align = hamburger ? "text-right" : "text-left";

  return (
    <li
      className={`${margin} mx-3 pb-1 ${underline} ${align}`}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      <Link
        to={href}
        onMouseEnter={() => enter(href)}
        onMouseLeave={() => leave(href)}
        className="inline-block"
      >
        {label}
        <Underline under={under} underline={underline} />
      </Link>
    </li>
  );
}

function Underline({ under, underline }) {
  const decoration = (underline || under) ? "block" : "hidden";
  return <div className={`w-full h-0.5 bg-black ${decoration}`}></div>;
}

export default Item;
