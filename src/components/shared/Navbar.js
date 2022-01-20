import React, { useState } from "react";
import { Link } from "gatsby";

import data from "../../data";

export default function NavBar({ path }) {
    const { nav } = data;
    // const [hover, useHover] = useState(path);

    return (
        <nav>
            <ul className="flex" style={{fontFamily: "Cinzel"}}>
                {nav.map(page => {
                    return (
                        <Item 
                            hover={path} 
                            href={page.href} 
                            label={page.label} 
                            key={page.href}
                        />
                    )
                })}
            </ul>
        </nav>
    )
}

function Item({ href, label, hover }) {
    const helper = (href) => {
        if (href === "/") {
            return href;
        } else if (href.endsWith("/")) {
            return href.slice(0, href.length - 1);
        } else {
            return href;
        }
    }

    const pathHelped = helper(hover);
    const helped = helper(href);
    const underline = pathHelped === helped ? true : false;

    const [under, setUnder] = useState(false);

    const enter = () => {
        setUnder(true);
    }

    const leave = () => {
        setUnder(false);
    }

    return (    
        <li className={`mx-3 ${underline}`} onMouseEnter={enter} onMouseLeave={leave}>
            <Link to={href} 
                    onMouseEnter={() => enter(href)} 
                    onMouseLeave={() => leave(href)}>
                {label}
            </Link>
            {(underline || under) && <Underline />}
        </li>
    )
}

function Underline() {
    return (
        <div className="w-full h-0.5 bg-black"></div>
    )
}