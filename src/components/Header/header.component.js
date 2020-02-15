import React from 'react'
import './header.styles.scss'  

const Header = () => {
  return (
    <nav className='nav'>
      <h1>Elena Joy</h1>
      <ul className='header__list'>
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  )
}


export default Header