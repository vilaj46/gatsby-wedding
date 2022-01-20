import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Header from "../components/shared/Header"
import Footer from "../components/shared/Footer";

// https://picsum.photos/

// markup
const GiftRegistry = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <div>
          Decoration
      </div>
      <h2>Gift Registry</h2>
      <div>Deocration</div>
      <h3>Our Wedding Registry</h3>
      <p>Link to view registry</p>
      <Footer />
    </main>
  )
}

export default GiftRegistry;
