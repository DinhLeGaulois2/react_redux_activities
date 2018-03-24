import React from 'react'
import PropTypes from 'prop-types'

const MenuButton = ({ children, onMenuClick }) => {
  return (
    <button
      className="menuButton"
      onClick={e => {
        e.preventDefault()
        onMenuClick()
      }}
    >
      {children}
    </button>
  )
}

MenuButton.propTypes = {
  children: PropTypes.node.isRequired,
  onMenuClick: PropTypes.func.isRequired
}

export default MenuButton
