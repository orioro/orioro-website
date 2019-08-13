import React from 'react'

import { Link } from 'gatsby'
import { Layout } from '../../components/Layout/Layout'
import { SEO } from '../../components/SEO/SEO'
import { ContentSection } from '../../components/ContentSection/ContentSection'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import { ProjectThumbnail } from '../../components/ProjectThumbnail/ProjectThumbnail'

const ProjetosPage = ({
  data
}) => {
  return <Layout>
    <SEO title='Projetos' />

    <ContentSection>
      <div className='row p-top-4'>
        <div className='col-12'>
          <Link
            className='link link--icon-left m-bottom-4'
            to='/'>
            <ArrowBackIcon />
            Home
          </Link>
          <h1 className='h1 m-bottom-4'>Projetos</h1>
        </div>

        <div className='col-12'>
          <ul className='list list--3'>
            {data.projects.edges.map(({ node }) => (
              <li key={node.id}>
                <ProjectThumbnail
                  location={node.fields.slug}
                  title={node.frontmatter.title}
                  date={node.frontmatter.date}
                  excerpt={node.excerpt}
                  featuredImage={node.frontmatter.featuredImage ?
                    node.frontmatter.featuredImage.childImageSharp.fluid :
                    null
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentSection>
  </Layout>
}

export default ProjetosPage

export const query = graphql`
  query {
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { glob: "/projetos/**" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
