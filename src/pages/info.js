import * as React from "react";
import { graphql } from "gatsby";

// https://picsum.photos/
// https://zyro.com/preview/kenzie

// Components
import NewHeader from "../components/shared/NewHeader";
import Information from "../components/infoPage/Information";
import InformationGallery from "../components/infoPage/InformationGallery";
import PageSection from "../components/shared/PageSection";
import Footer from "../components/shared/Footer";

const InfoPage = (props) => {
  const { path } = props;
  const { images, specialImage } = props.data;
  const { edges } = images;
  return (
    <section>
      <div className="ivory">
        <NewHeader path={path} />
        <PageSection>
          <div className="pt-28 ivory">
            <Information />
          </div>
        </PageSection>
      </div>
      <InformationGallery images={edges} specialImage={specialImage} />
      <Footer />
    </section>
  );
};

export const query = graphql`
  query InfoQuery {
    site(siteMetadata: { siteUrl: {} }) {
      id
      siteMetadata {
        siteUrl
      }
    }
    images: allFile {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 250, maxHeight: 400, quality: 100) {
              base64
              tracedSVG
              srcWebp
              srcSetWebp
              originalImg
              originalName
              ...GatsbyImageSharpFluid
            }
          }
          relativeDirectory
        }
      }
    }
    specialImage: file(relativePath: { regex: "/special.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 410, maxHeight: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default InfoPage;
