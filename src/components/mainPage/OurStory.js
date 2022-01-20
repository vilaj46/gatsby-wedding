import React from "react";
import Img from "gatsby-image"

export default function OurStory({ image }) {
    return (
        <section className="flex max-h-96" style={{border: "2px solid red"}}>
            <SideImage image={image} />
            <div className="w-2/4">
                <p>For those who didn't know</p>
                <p>Our Story</p>
                <p>We met 9 years ago in London for the first time. Dave was in a supermarket, in the frozen aisle trying to figure out what vegan ice cream is and a girl walks up and says: ‘Hey, do you know where to find vegan ice cream?’. As a couple we've been are together for 8 years now & we’re getting married next year.</p>
            </div>
        </section>
    )
}

function SideImage({ image }) {
    return (
        <div className="w-2/4 max-h-96">
            <Img fluid={image.childImageSharp.fluid} className="max-h-96"/>
        </div>
    )
}