import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Foodies</h3>
          <p>Authentic Pakistani flavors with a modern twist.</p>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>📍 123 Food Street, Karachi</p>
          <p>📞 +92 300 1234567</p>
          <p>✉️ info@foodies.pk</p>
        </div>
        <div className="footer-section">
          <h4>Opening Hours</h4>
          <p>Mon - Thu: 11am - 11pm</p>
          <p>Fri - Sat: 11am - 12am</p>
          <p>Sunday: 12pm - 10pm</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="Twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Foodies. All rights reserved.</p>
      </div>
    </footer>
  )
}
