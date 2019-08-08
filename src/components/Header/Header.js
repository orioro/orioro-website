import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import logoPath from '../../images/logo-orioro.svg'

import { MenuButton } from './MenuButton'

import './header.less'

export const Header = ({ siteTitle }) => (
  <header
    id='main-header'
    className='bg-white'>
    <div className='website-side-padding website-max-width'>
      <Link
        to='/'
        id={'main-logo'}
        className='d-block'>
        <img
          src={logoPath}
          alt='ORI:ORO'
        />
      </Link>

      <MenuButton />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
