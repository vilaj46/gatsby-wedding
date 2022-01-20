import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer";

// https://picsum.photos/

// markup
const EventsPage = ({ data }) => {
  const { mainImage } = data;
  return (
    <main className="container mx-auto">
      <Header />
      <div>
          Decoration
      </div>
      <h2>Events</h2>
      <div>Decoration</div>
      <h3>Welcome Cocktails</h3>
      <p>Cock tail time and date</p>
      <p>Location</p>
      <h3>Nuptial Mass</h3>
      <p>Mass time and date</p>
      <p>Location</p>
      <p>Get Directions Link to google maps</p>
      <h3>Reception</h3>
      <p>Reception Time and date</p>
      <p>Location</p>
      <p>Direction Link</p>
      <Footer />
    </main>
  )
}

export const query = graphql`
  query {
    mainImage: file(relativePath: { regex: "/main.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default EventsPage
