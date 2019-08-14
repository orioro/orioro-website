import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import './project-thumbnail.less'

export const ProjectThumbnail = ({
  location,
  title,
  description,
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
    <h4 className='h4'>
      <strong>
      {title}
      </strong>
      <br />
      {description}
    </h4>
  </Link>
)
