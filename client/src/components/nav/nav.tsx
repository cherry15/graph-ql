import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li>
          <NavLink
            to={'/'}
            className={`nav-link logo ({ isActive }) => (isActive ? 'active' : '')`} aria-label="Home">
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/tracks'}
            className={`nav-link ({ isActive }) => (isActive ? 'active' : '')`}
          >
            Tracks
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'/about'}
            className={`nav-link ({ isActive }) => (isActive ? 'active' : '')`}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
