import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'
  const reserveClass = ({ isActive }) => isActive ? 'btn active-link' : 'btn'

  return (
    <nav className="navbar">
      <div className="logo">🍽️ Foodies</div>
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle navigation"
      >
        ⋯
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink onClick={() => setMenuOpen(false)} to="/" className={linkClass}>Home</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/menu" className={linkClass}>Menu</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/about" className={linkClass}>About</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/contact" className={linkClass}>Contact</NavLink>
        <NavLink onClick={() => setMenuOpen(false)} to="/reservation" className={reserveClass}>Reserve</NavLink>
      </div>
    </nav>
  )
}
