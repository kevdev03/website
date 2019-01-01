import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PostLink from '../components/post-link'
// import Image from '../components/image'
// import SEO from '../components/seo'

const page = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  // return <Layout></Layout>
  return <Layout>{Posts}</Layout>
}

export default page

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
