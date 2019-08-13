import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Link } from 'gatsby'
import logoPath from '../../images/logo-orioro.svg'

import { useRect } from '../../util'

import { MainMenu } from '../MainMenu/MainMenu'

import './header.less'

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const useWindowScrollTop = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const updateWindowScrollTop = () => {
      const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)

      setScrollTop(scrollTop)
    }

    window.addEventListener('scroll', updateWindowScrollTop)

    return () => {
      window.removeEventListener('scroll', updateWindowScrollTop)
    }
  }, [])

  return scrollTop
}

export const Header = ({ siteTitle }) => {
  const headerRef = useRef(null)
  const scrollTop = useWindowScrollTop()
  const previousScrollTop = usePrevious(scrollTop)

  const { height } = useRect(headerRef)

  return <header
    ref={headerRef}
    id='main-header'
    className={`bg-white ${classnames({
      'far-from-top': height > 0 && previousScrollTop < scrollTop && scrollTop > height,
    })}`}>
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

      <MainMenu />
    </div>
  </header>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
