import React from 'react'
import { Link } from 'gatsby'
import { Layout } from '../../components/Layout/Layout'
import { SEO } from '../../components/SEO/SEO'
import { ContentSection } from '../../components/ContentSection/ContentSection'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import { ProjectThumbnail } from '../../components/ProjectThumbnail/ProjectThumbnail'

export default ({
  data
}) => {
  const { project, relatedProjects } = data

  const headingSectionBg = project.frontmatter.headingSectionBg || false
  const imageSectionBg = project.frontmatter.imageSectionBg || false

  return <Layout>
    <SEO title={project.frontmatter.title} />
    <ContentSection>
      <div className='row p-top-4'>
        <div className='col-12'>
          <Link
            className='link link--icon-left m-bottom-4'
            to='/projetos'>
            <ArrowBackIcon />
            Projetos
          </Link>
          <h1>{project.frontmatter.title}</h1>
        </div>
      </div>
      <div className='row m-bottom-8'>
        <div className='col-md-9 offset-md-3 m-bottom-4'>
          <h2>{project.frontmatter.description}</h2>
          <div
            className='oo-rich-text m-top-4'
            dangerouslySetInnerHTML={{ __html: project.html }} />
          {project.frontmatter.featuredImage ? <div className='m-top-4'>
            <Img fluid={project.frontmatter.featuredImage.childImageSharp.fluid}/>
          </div> : null}
        </div>
      </div>
      <div className='row'>
        <div className='offset-md-3' />
        {project.frontmatter.year ? <div className='col-md-3'>
          <h4 className='m-bottom-10'><strong>Ano</strong></h4>
          <div>{project.frontmatter.year}</div>
        </div> : null}
        {project.frontmatter.scope ? <div className='col-md-3'>
          <h4 className='m-bottom-10'><strong>Atividades realizadas</strong></h4>
          <ul className='list-reset'>
            {project.frontmatter.scope.map(({ title, description }, index) => (
              <li
                key={index}
                className={index === 0 ? null : 'm-top-8'}>
                <span>{title}</span> {description ? <span>{description}</span> : null}
              </li>
            ))}
          </ul>
        </div> : null}
        {project.frontmatter.website ? <div className='col-md-3'>
          <h4 className='m-bottom-10'><strong>Site online</strong></h4>
          <a
            className='link link--icon-right'
            href={project.frontmatter.website}
            target='_blank'
            rel='noopener noreferrer'>
            Visite o projeto
            <ArrowForwardIcon />
          </a>
        </div> : null}
      </div>
    </ContentSection>

    {project.frontmatter.images && project.frontmatter.images.length > 0 ?
      <ContentSection backgroundColor={imageSectionBg}>
        <div
          className='oo-rich-text'>
          {project.frontmatter.images.map((image, index) => <figure key={index}>
            <Img fluid={image.path.childImageSharp.fluid} />
            <figcaption>
              {image.caption}
            </figcaption>
          </figure>)}
        </div>
      </ContentSection>
      : null}

    <ContentSection>
      <h2 className='h1 m-bottom-4'>
        Conheça outros projetos:
      </h2>
      <ul className='list list--3'>
        {relatedProjects.edges.map(({ node }) => (
          <li key={node.id}>
            <ProjectThumbnail
              location={node.fields.slug}
              title={node.frontmatter.title}
              description={node.frontmatter.description}
              date={node.frontmatter.date}
              scope={node.frontmatter.scope}
              excerpt={node.excerpt}
              featuredImage={node.frontmatter.featuredImage ?
                node.frontmatter.featuredImage.childImageSharp.fluid :
                null
              }
            />
          </li>
        ))}
      </ul>
    </ContentSection>

  </Layout>
}

export const query = graphql`
  query($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        headingSectionBg
        imageSectionBg
        year
        website
        scope {
          title
          description
        }
        images {
          path {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
        }
      }
    }
    relatedProjects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { slug: { glob: "/projetos/**", ne: $slug } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            description
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
