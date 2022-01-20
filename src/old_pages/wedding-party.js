import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Header from "../../components/shared/Header"
import Footer from "../../components/shared/Footer";

// https://picsum.photos/

// markup
const WeddingPartyPage = () => {
  return (
    <main className="container mx-auto">
      <Header />
      <div>
          Decoration
      </div>
      <h2>Wedding Party</h2>
      <div>Decoration</div>
      <Footer />
    </main>
  )
}


export default WeddingPartyPage
