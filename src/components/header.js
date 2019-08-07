import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

export const Header = ({ siteTitle }) => (
  <header>
    <div className='website-side-padding website-max-width'>
      <h1>
        <Link to='/'>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
