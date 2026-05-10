import React from 'react'

import ReservationForm from "../components/ReservationForm";
export default function Reservation() {

  return (

     <div className="reservations-page">

      <div className="res-hero">
        <div className="res-hero-overlay" />
        <div className="res-hero-content">
          <p className="res-hero-sub">Book Your Seat</p>
          <h1 className="res-hero-title">Reserve a Table</h1>
          <p className="res-hero-desc">
            Join us for an unforgettable dining experience. Fill in the form
            below and we'll have your table ready.
          </p>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="res-body">

        {/* Left – Info Panel */}
        <div className="res-info">
          <h2 className="res-info-title">Dining Information</h2>

          <div className="info-card">
            <span className="info-icon">🕐</span>
            <div>
              <h4>Opening Hours</h4>
              <p>Mon – Thu: 12:00 PM – 11:00 PM</p>
              <p>Fri – Sat: 12:00 PM – 12:00 AM</p>
              <p>Sunday: 01:00 PM – 10:00 PM</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📍</span>
            <div>
              <h4>Our Location</h4>
              <p>123 Food Street, Gulberg III</p>
              <p>Lahore, Punjab, Pakistan</p>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">📞</span>
            <div>
              <h4>Contact Us</h4>
              <p>+92 300 123 4567</p>
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noreferrer"
                className="whatsapp-link"
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          <div className="info-card">
            <span className="info-icon">ℹ️</span>
            <div>
              <h4>Reservation Policy</h4>
              <p>Reservations held for 15 minutes. Large groups (8+) please call us directly.</p>
            </div>
          </div>
        </div>

        <div className="res-form-section">
          <div className="form-header">
            <h2 className="form-section-title">Book Your Table</h2>
            <p className="form-section-sub">
              Fields marked with <span className="required">*</span> are required
            </p>
          </div>
          <ReservationForm />
        </div>

      </div>
    </div>
  );
}

