import React from "react";



// Components
import Heroes from "./Heroes";
import NavBar from "./Navbar";

export default function NewHeader({ path }) {
    return (
        <header className="container flex justify-between pb-10">
            <Heroes />
            <NavBar path={path} />
        </header>
    )
}