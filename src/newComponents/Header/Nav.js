import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "gatsby";

// Components
import Container from "../Container";
import SubContainer from "../SubContainer";

// Data
import data from "../../data";

export default function Nav({ pathname }) {
  const green = "#365314";
  const black = "black";

  const [color, setColor] = useState(black);
  const [isOpen, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const enter = () => {
    setColor(green);
  };
  const leave = () => {
    setColor(black);
  };

  const { nav } = data;
  const position = isOpen ? "absolute" : "static";
  const scroll = scrolling ? "fixed" : "static";

  const isBrowser = typeof window !== "undefined";
  if (isBrowser) {
    window.addEventListener("scroll", () =>
      listenToScroll(scrolling, setScrolling)
    );
  }

  return (
    <nav className={`${scroll} top-0 w-full z-50 bg-white eaves text-xl`}>
      <div className={`${position} z-50 bg-white w-full overflow-hidden`}>
        <Container>
          <SubContainer>
            <CustomHamburger
              enter={enter}
              leave={leave}
              color={color}
              green={green}
              black={black}
              isOpen={isOpen}
              setOpen={setOpen}
            />
          </SubContainer>
        </Container>
      </div>
      {isOpen && <LinksForHamburger nav={nav} pathname={pathname} />}
      <RegularLinks nav={nav} pathname={pathname} pathname={pathname} />
    </nav>
  );
}

function listenToScroll(scrolling, setScrolling) {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  if (winScroll > 180 && scrolling === false) {
    setScrolling(true);
  } else if (winScroll < 180 && scrolling === true) {
    setScrolling(false);
  }
}

function LinksForHamburger({ nav, pathname }) {
  const isHome = pathname === "/" ? "text-green-900" : "text-black";
  return (
    <ul>
      <li
        className={`${isHome} text-center border border-gray p-3 hover:text-green-900`}
      >
        <Link to="/">Home</Link>
      </li>
      {nav.map((n) => {
        const color = pathname === n.href ? "text-green-900" : "text-black";
        return (
          <li
            key={n.label}
            className={`text-center border border-gray p-3 hover:text-green-900 ${color}`}
          >
            <Link to={n.href}>{n.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}

function RegularLinks({ nav, pathname }) {
  return (
    <SubContainer>
      <ul className="hidden md:flex justify-evenly">
        {nav.map((n) => {
          const color = pathname === n.href ? "text-green-900" : "text-black";
          return (
            <li
              key={n.label}
              className={`text-center hover:text-green-900 ${color}`}
            >
              <Link to={n.href}>{n.label}</Link>
            </li>
          );
        })}
      </ul>
    </SubContainer>
  );
}

function CustomHamburger({
  enter,
  leave,
  color,
  green,
  black,
  isOpen,
  setOpen,
}) {
  return (
    <div onMouseEnter={enter} onMouseLeave={leave} className="md:hidden">
      {color === green && (
        <Hamburger color={green} toggled={isOpen} toggle={setOpen} />
      )}
      {color === black && (
        <Hamburger color={black} toggled={isOpen} toggle={setOpen} />
      )}
    </div>
  );
}
