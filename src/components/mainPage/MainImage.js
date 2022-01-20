import React from "react";
import Img from "gatsby-image"

import data from "../../data"

export default function MainImage({ image }) {
    const { bride, groom } = data;
    return (
        <div className="relative">
            <div className="z-50 text-white absolute left-0 right-0 top-2/4 transform -translate-y-1/2 text-4xl">
                <p className="text-center text-4xl" style={{fontFamily: "Cinzel Decorative"}}>{bride.first} {<br />} {<br />} {groom.first}
                    <span className="block text-xl">{<br />} {<br />}Are getting married</span>
                    <span className="block text-xl">26th November, 2021 | 11:00 AM</span>
                </p>
            </div>
            <div className="z-0">
                <Img fluid={image.childImageSharp.fluid} />
            </div>
        </div>
    )
};