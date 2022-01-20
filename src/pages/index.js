import * as React from "react"
import { graphql } from "gatsby"

// https://picsum.photos/
// https://zyro.com/preview/kenzie

// Components
import NewHeader from "../components/shared/NewHeader"
import MainImage from "../components/mainPage/MainImage"
import OurStory from "../components/mainPage/OurStory"

const IndexPage = (props) => {
    
  const { path } = props;
  const { mainImage, ourStoryImage } = props.data;

  return (
    <main className="container mx-auto pt-10">
        <NewHeader path={path} />
        <MainImage image={mainImage} />
        <OurStory image={ourStoryImage} />
    </main>
  )
}

export const query = graphql`
    query MyQuery {
        site(siteMetadata: {siteUrl: {}}) {
            id
            siteMetadata {
                siteUrl
            }
        }
        mainImage: file(relativePath: { regex: "/main.jpg/" }) {
            childImageSharp {
              fluid(maxWidth: 1280, maxHeight: 500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          ourStoryImage: file(relativePath: { regex: "/ourStory.jpg/" }) {
            childImageSharp {
              fluid(maxWidth: 250, maxHeight: 400, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
    }  
`

export default IndexPage
