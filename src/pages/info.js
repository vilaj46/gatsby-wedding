import * as React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

// https://picsum.photos/
// https://zyro.com/preview/kenzie

// Components
import NewHeader from "../components/shared/NewHeader"

const InfoPage = (props) => {
  const { path } = props;
  return (
    <main className="container mx-auto pt-10">
        <NewHeader path={path} />
        Info Page
    </main>
  )
}

export const query = graphql`
    query InfoQuery {
        site(siteMetadata: {siteUrl: {}}) {
            id
            siteMetadata {
                siteUrl
            }
        }
    }  
`

export default InfoPage
