import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
      <NavLink className="navbar-brand" to='/' >100 prisoners problem</NavLink>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mx-auto">
            <NavLink to='/' className='nav-link'>Game</NavLink>
          </li>
          <li className="nav-item mx-auto">
            <NavLink to='/info' className='nav-link'>Info</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
