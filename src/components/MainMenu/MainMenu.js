import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'gatsby'
import './main-menu.less'

import { ContactCard } from '../ContactCard/ContactCard'

import { MenuButton } from './MenuButton'

const MAIN_MENU_LINKS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Quem somos',
    href: '/sobre'
  },
  // {
  //   label: 'Nosso jeito de trabalhar',
  //   href: '/como-trabalhamos',
  // },
  // {
  //   label: 'Nossa equipe',
  //   href: '/equipe',
  // },
  {
    label: 'Projetos',
    href: '/projetos',
  }
]

export const MainMenu = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('main-menu-open', menuOpen)
  }, [menuOpen])

  return <React.Fragment>
    <MenuButton
      menuOpen={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
    />
    {typeof document !== 'undefined' && ReactDOM.createPortal(
      <div
        id='main-menu'>
        <div className='website-side-padding website-max-width p-top-5'>
          <div className='row'>
            <div className='col-md-5 offset-md-1'>
              <nav>
                <ul>
                  {MAIN_MENU_LINKS.map(({ label, href }, index) => (
                    <li key={index}>
                      <Link
                        to={href}
                        activeClassName='active'
                        partiallyActive>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className='col-md-5'>
              <ContactCard />
            </div>
          </div>
        </div>
      </div>,
      window.document.body
    )}

  </React.Fragment>
}
