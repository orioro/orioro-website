import React from 'react'
import { Layout } from '../../components/Layout/Layout'
import { ContentSection } from '../../components/ContentSection/ContentSection'
import { graphql } from 'gatsby'

export default ({
  data
}) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <ContentSection>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </ContentSection>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
