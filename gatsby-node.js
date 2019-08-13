const path = require('path')
const fs = require('fs')
const { createFilePath } = require('gatsby-source-filesystem')

const fileExists = filePath => {
  try {
    return fs.lstatSync(filePath).isFile()
  } catch (err) {
    if (err.code === 'ENOENT') {
      return false
    } else {
      throw (err)
    }
  }
}

const resolveNodeComponent = node => {
  const nodeRendererPath = path.join(path.dirname(node.fileAbsolutePath), 'index.js')
  const slugDirname = path.dirname(node.fields.slug)
  const template = slugDirname === '/' ? '/page' : slugDirname

  return fileExists(nodeRendererPath) ?
    nodeRendererPath : path.join(
      __dirname,
      'src/templates',
      template,
      'template.js'
    )
}

// You can delete this file if you're not using it
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
    })

    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: resolveNodeComponent(node),
      context: {
        slug: node.fields.slug,
      }
    })
  })
}
