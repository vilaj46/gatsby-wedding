import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Header from "../newComponents/Header";
import ImageBorder from "../newComponents/ImageBorder";
import Container from "../newComponents/Container";
import Footer from "../newComponents/Footer";
import People from "../components/weddingParty/People";
import SubContainer from "../newComponents/SubContainer";

const WeddingPartyPage = (props) => {
  const { location } = props;
  return (
    <main>
      <Header location={location} />
      <Footer />
      <p className="text-center text-3xl quickPen mx-auto">Wedding Party</p>
      <div className="w-full mx-auto text-center py-12">
        <StaticImage src="../images/floral/leaf2.png" />
      </div>
      <Container>
        <SubContainer>
          <People />
        </SubContainer>
      </Container>
      <Footer />
    </main>
  );
};

export const query = graphql`
  query WeddingPartyQuery {
    site(siteMetadata: { siteUrl: {} }) {
      id
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default WeddingPartyPage;
