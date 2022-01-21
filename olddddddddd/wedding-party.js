import * as React from "react";
import { graphql } from "gatsby";

// https://picsum.photos/
// https://zyro.com/preview/kenzie

// Components
import NewHeader from "../components/shared/NewHeader";
import Footer from "../components/shared/Footer";
import PageSection from "../components/shared/PageSection";
import People from "../components/weddingParty/People";

// Home isn't underline on deployed version.

const WeddingParty = (props) => {
  const { path } = props;

  return (
    <main>
      <NewHeader path={path} />
      <PageSection>
        <div className="pt-32">
          <section className="pb-24">
            <div className="container mx-auto cinzel">
              <h2 className="text-center text-3xl pt-24 pb-24">
                Wedding Party
              </h2>
              <div>Decoration</div>
              <People />
            </div>
          </section>
        </div>
      </PageSection>
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

export default WeddingParty;
