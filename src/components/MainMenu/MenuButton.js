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
  onClick,
  menuOpen = false
}) => {

  const computeLineStyle = index => {
    return {
      ...LINE_STYLE,
      top: menuOpen ? [7, 14, 23][index] + 'px' : [7, 14, 21][index] + 'px',
      left: menuOpen ? [7, 4, 7][index] + 'px' : LINE_STYLE.left,
      opacity: menuOpen ? [1, 0, 1][index] : 1,
      transform: menuOpen ? `rotate(${[45, 0, -45][index]}deg` : LINE_STYLE.transform
    }
  }

  return <button
    style={BUTTON_STYLE}
    className='menu-button'
    onClick={onClick}>
    <span style={computeLineStyle(0)}></span>
    <span style={computeLineStyle(1)}></span>
    <span style={computeLineStyle(2)}></span>
  </button>
}
