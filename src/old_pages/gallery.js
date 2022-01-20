import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer";

// https://picsum.photos/

// markup
const GalleryPage = ({ data }) => {
  const { mainImage } = data;
  return (
    <main className="container mx-auto">
      <Header />
      <div>
          Decoration
      </div>
      <h2>Gallery</h2>
      <div>Decoration</div>
      <section>Photos!</section>
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

export default GalleryPage
