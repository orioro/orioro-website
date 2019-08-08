import React from 'react'

const BUTTON_STYLE = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',

  position: 'relative',

  width: '30px',
  height: '30px'
}

const LINE_STYLE = {
  display: 'block',
  position: 'absolute',
  height: '2px',
  width: '22px',
  backgroundColor: 'currentColor',
  opacity: '1',
  left: '4px',
  transform: 'rotate(0deg)',
  transformOrigin: 'left center',
  transition: '.25s ease-in-out',
}

export const MenuButton = ({
  onClick
}) => {

  const computeLineStyle = index => {
    return {
      ...LINE_STYLE,
      top: [7, 14, 21][index] + 'px',
    }
  }

  return <button
    style={BUTTON_STYLE}
    className='menu-button'>
    <span style={computeLineStyle(0)}></span>
    <span style={computeLineStyle(1)}></span>
    <span style={computeLineStyle(2)}></span>
  </button>
}
