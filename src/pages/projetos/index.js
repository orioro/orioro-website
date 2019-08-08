import React from 'react'

import { Link } from 'gatsby'
import { Layout } from '../../components/Layout/Layout'
import { SEO } from '../../components/SEO/SEO'
import { ContentSection } from '../../components/ContentSection/ContentSection'
import { useStaticQuery, graphql } from 'gatsby'

const ProjetosPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativePath: {regex: "/^projetos/.*/index.js$/"}}) {
        edges {
          node {
            id
            relativePath
          }
        }
      }
    }
  `)

  console.log(data)

  return <Layout>
    <SEO title='Home' />

    <ContentSection>
      <div className='row'>
        <ul className='list list--3'>
          {data.allFile.edges.map(project => {
            return <li key={project.node.id}>
              <Link to={project.node.relativePath}>
                {project.node.relativePath}
              </Link>
            </li>
          })}
        </ul>
      </div>
    </ContentSection>
  </Layout>
}

export default ProjetosPage
