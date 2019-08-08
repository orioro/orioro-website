import React from 'react'
import classnames from 'classnames'

export const ContentSection = ({ backgroundColor, children }) => {

  const backgroundColorClassName = backgroundColor ? `bg-${backgroundColor}` : false
  const BACKGROUND_COLOR_CLASSES = backgroundColorClassName ? {
    'oo-content-section--with-bg': true,
    [backgroundColorClassName]: true,
  } : {}

  return <section
    className={classnames({
      'oo-content-section': true,
      ...BACKGROUND_COLOR_CLASSES,
    })}>
    <div className='website-side-padding website-max-width'>
      {children}
    </div>
  </section>
}
