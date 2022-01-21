import * as React from "react";
// import Img from "gatsby-image"
import { graphql } from "gatsby";

// https://picsum.photos/
// https://zyro.com/preview/kenzie

// Components
import NewHeader from "../components/shared/NewHeader";
import PageSection from "../components/shared/PageSection";
import Footer from "../components/shared/Footer";

const ReservationPage = (props) => {
  const { path } = props;
  return (
    <section>
      <NewHeader path={path} />
      <PageSection>
        <div className="pt-28">
            Reservation
          {/* <MainImage image={mainImage} />
          <OurStory image={ourStoryImage} /> */}
        </div>
      </PageSection>
      <Footer />
    </section>
  );
};

export const query = graphql`
  query ReservationQuery {
    site(siteMetadata: { siteUrl: {} }) {
      id
      siteMetadata {
        siteUrl
      }
    }
  }
`;

export default ReservationPage;
