import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Header from "../../components/shared/Header"
import Footer from "../../components/shared/Footer";

// https://picsum.photos/

// markup
const TravelPage = ({ data }) => {
  const { firstImage, secondImage } = data;
  return (
    <main className="container mx-auto">
      <Header />
      <div>
          Decoration
      </div>
      <h3>Travel</h3>
      <div>Decoration</div>
      <div>Google Image? General pic</div>
      <h4>Church and Reception Location</h4>
      <p>Note: ?</p>
      <div>Decoration</div> 
      <section>
          <Img fluid={firstImage.childImageSharp.fluid} alt="Image of Hotel" />
          <h5>Hotel Name and whatever information</h5>
          <p>Hotel information</p>
          <p>Hotel website</p>
      </section>
      <div>Decoration</div>
      <section>
          <Img fluid={secondImage.childImageSharp.fluid} alt="Image of Hotel" />
          <h5>Hotel Name and whatever information</h5>
          <p>Hotel information</p>
          <p>Hotel website</p>
      </section>
      <section>
          <h5>Air BNB</h5>
          <p>Airbnb website</p>
      </section>
      <Footer />
    </main>
  )
}

export const query = graphql`
  query {
    firstImage: file(relativePath: { regex: "/travel.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    secondImage: file(relativePath: { regex: "/travel2.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 500, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`

export default TravelPage
