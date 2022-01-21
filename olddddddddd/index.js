// import * as React from "react";
// import { graphql } from "gatsby";

// // https://picsum.photos/
// // https://zyro.com/preview/kenzie

// // Components
// import NewHeader from "../components/shared/NewHeader";
// import Footer from "../components/shared/Footer";
// import MainImage from "../components/mainPage/MainImage";
// import OurStory from "../components/mainPage/OurStory";
// import PageSection from "../components/shared/PageSection";

// // Home isn't underline on deployed version.

// const IndexPage = (props) => {
//   const { path } = props;
//   const { mainImage, ourStoryImage } = props.data;

//   return (
//     <main>
//       <NewHeader path={path} />
//       <PageSection>
//         <div className="pt-28">
//           <MainImage image={mainImage} />
//           <OurStory image={ourStoryImage} />
//         </div>
//       </PageSection>
//       <Footer />
//     </main>
//   );
// };

// export const query = graphql`
//   query MyQuery {
//     site(siteMetadata: { siteUrl: {} }) {
//       id
//       siteMetadata {
//         siteUrl
//       }
//     }
//   }
// `;

// export default IndexPage;
