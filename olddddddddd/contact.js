import * as React from "react"
// import Img from "gatsby-image"
import { graphql } from "gatsby"

// https://picsum.photos/
// https://zyro.com/preview/kenzie

// Components
import NewHeader from "../components/shared/NewHeader"

const ContactPage = (props) => {
  const { path } = props;
  return (
    <main className="container mx-auto pt-10">
        <NewHeader path={path} />
        Contact Page
    </main>
  )
}

export const query = graphql`
    query ContactQuery {
        site(siteMetadata: {siteUrl: {}}) {
            id
            siteMetadata {
                siteUrl
            }
        }
    }  
`

export default ContactPage
