import React from 'react'
import './styles.scss'

export const Menu = ({ isOpen }) => {
  return (
    <div className={`menu-burger ${isOpen ? 'open' : ''}`}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  )
}
