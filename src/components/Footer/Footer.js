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
      <div className='row p-vertical-3'>
        <div className='col-md-4'>
          <ContactCard />
        </div>
      </div>
    </div>
  </footer>
)
