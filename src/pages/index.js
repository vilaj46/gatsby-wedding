import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

// https://picsum.photos/
// https://zyro.com/preview/kenzie
// https://demos.oursite.minted.com/MIN-XWZ-DWW/1362911/l1/

import Header from "../newComponents/Header";
import ImageBorder from "../newComponents/ImageBorder";
import Container from "../newComponents/Container";
import Footer from "../newComponents/Footer";

const IndexPage = (props) => {
  const { location } = props;
  return (
    <main>
      <Header location={location} />
      <ImageBorder>
        <Container>
          <StaticImage src="../images/floral/mainImage.jpg" />
        </Container>
      </ImageBorder>
      <Container>
        <p className="text-center pt-12 text-3xl eaves">
          Please join us for our wedding celebration on
        </p>
        <p className="text-center py-6 quickPen text-4xl">November 26, 2022</p>
        <div className="w-full mx-auto text-center">
          <StaticImage src="../images/floral/leaf2.png" />
        </div>
        <p className="text-center py-6 quickPen text-3xl">Our Story</p>
        <p className="text-center text-xl eaves">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </Container>
      <Footer />
    </main>
  );
};

export const query = graphql`
  query HomeQuery {
    site(siteMetadata: { siteUrl: {} }) {
      id
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default IndexPage;
