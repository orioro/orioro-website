import React from 'react'
import { Link } from 'gatsby'
import { ContactCard } from '../ContactCard/ContactCard'

import logoPath from '../../images/logo-orioro-negative.svg'
import './footer.less'

export const Footer = ({ siteTitle }) => (
  <footer
    id='main-footer'
    className='bg-black'>
    <div className='website-side-padding website-max-width'>
      <div className='row p-vertical-5'>
        <div className='col-12'>
          <div className='d-flex'>
            <Link
              to='/'
              id={'footer-logo'}
              className='d-block'>
              <img
                src={logoPath}
                alt='ORI:ORO'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='row p-bottom-3'>
        <div className='offset-md-1 col-md-4'>
          <ContactCard />
        </div>
      </div>
    </div>
  </footer>
)
