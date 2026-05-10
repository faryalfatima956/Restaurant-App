import React, { useState } from 'react'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'
  const reserveClass = ({ isActive }) => isActive ? 'btn active-link' : 'btn'

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="logo">🍽️ Foodies</div>
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        type="button"
      >
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className={linkClass} onClick={handleLinkClick}>Home</NavLink>
        <NavLink to="/menu" className={linkClass} onClick={handleLinkClick}>Menu</NavLink>
        <NavLink to="/about" className={linkClass} onClick={handleLinkClick}>About</NavLink>
        <NavLink to="/contact" className={linkClass} onClick={handleLinkClick}>Contact</NavLink>
        <NavLink to="/reservation" className={reserveClass} onClick={handleLinkClick}>Reserve</NavLink>
      </div>
    </nav>
  )
}
