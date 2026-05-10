import React from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {

  const linkClass = ({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'
  const reserveClass = ({ isActive }) => isActive ? 'btn active-link' : 'btn'

  return (
    <nav className="navbar">
      <div className="logo">🍽️ Foodies</div>
      <div>
        <NavLink to="/" className={linkClass}>Home</NavLink>
        <NavLink to="/menu" className={linkClass}>Menu</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        <NavLink to="/reservation" className={reserveClass}>Reserve</NavLink>
      </div>
    </nav>
  )
}
