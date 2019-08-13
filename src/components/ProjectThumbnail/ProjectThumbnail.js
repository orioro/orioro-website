import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './project-thumbnail.less'

export const ProjectThumbnail = ({
  location,
  title,
  date,
  excerpt,
  featuredImage,
}) => (
  <Link
    className='oo-project-thumbnail oo-composition-vertical-spacing'
    to={location}>
    {featuredImage ? <Img
      fluid={featuredImage}
    /> : null}
    <h3 className='h3'>
      {title}
    </h3>
    <div>{excerpt}</div>
  </Link>
)
