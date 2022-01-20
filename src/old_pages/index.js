import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer";
import OurStory from "../components/mainPage/OurStory";
import WeddingDate from "../components/mainPage/WeddingDate";

// https://picsum.photos/

// markup
const IndexPage = ({ data }) => {
  const { mainImage, ourStoryImage } = data;
  return (
    <main className="container mx-auto">
      <Header />
      <Img fluid={mainImage.childImageSharp.fluid} alt="Main Image" />
      <WeddingDate />
      <OurStory image={ourStoryImage} />
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
    ourStoryImage: file(relativePath: { regex: "/ourStory.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
