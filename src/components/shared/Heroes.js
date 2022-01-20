import React from "react";
import { Link } from "gatsby";

import data from "../../data";

export default function Heroes() {
    const { bride, groom } = data;
    return (
        <h1 className="text-xl" style={{fontFamily: "Amber Light Font"}}><Link to="/">{bride} & {groom}</Link></h1>
    )
}