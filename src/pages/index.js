import React from "react"
import { graphql } from 'gatsby'

export default function Home() {
  return <div>Hello world!</div>
}

const query = graphql`
  query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
