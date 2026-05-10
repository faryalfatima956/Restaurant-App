import React, { useState } from 'react'

export default function ReservationForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    let newErrors = {}
    if (!formData.name)    newErrors.name   = "Name is required"
    if (!formData.email)   newErrors.email  = "Email is required"
    if (!formData.phone)   newErrors.phone  = "Phone is required"
    if (!formData.date)    newErrors.date   = "Please select a date"
    if (!formData.time)    newErrors.time   = "Please select a time"
    if (!formData.guests)  newErrors.guests = "Number of guests is required"

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", date: "", time: "", guests: "", specialRequests: "" })
    setErrors({})
    setSubmitted(false)
  }

  if (submitted) {
    return (
      <div className="form-wrapper">
        <div className="success-card">
          <div className="success-icon">🎉</div>
          <h2 className="success-title">Reservation Confirmed!</h2>
          <p className="success-text">
            Thank you, <strong>{formData.name}</strong>! Your table for{" "}
            <strong>{formData.guests}</strong>{" "}
            {formData.guests === "1" ? "guest" : "guests"} has been reserved
            on <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
          </p>
          <p className="success-subtext">
            We will confirm your booking via <strong>{formData.email}</strong> shortly.
            We look forward to welcoming you! 🍽️
          </p>
          <button className="reset-btn" onClick={handleReset}>
            Make Another Reservation
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="form-wrapper">
      <form className="reservation-form" onSubmit={handleSubmit} noValidate>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name <span className="required">*</span></label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email Address <span className="required">*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Phone Number <span className="required">*</span></label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? "input-error" : ""}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Number of Guests <span className="required">*</span></label>
            <select
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={errors.guests ? "input-error" : ""}
            >
              <option value="">Select guests</option>
              {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
              ))}
              <option value="10+">10+ Guests</option>
            </select>
            {errors.guests && <span className="error-msg">{errors.guests}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Reservation Date <span className="required">*</span></label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              className={errors.date ? "input-error" : ""}
            />
            {errors.date && <span className="error-msg">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label>Preferred Time <span className="required">*</span></label>
            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              className={errors.time ? "input-error" : ""}
            >
              <option value="">Select time</option>
              <option value="12:00 PM">12:00 PM</option>
              <option value="12:30 PM">12:30 PM</option>
              <option value="01:00 PM">01:00 PM</option>
              <option value="01:30 PM">01:30 PM</option>
              <option value="02:00 PM">02:00 PM</option>
              <option value="07:00 PM">07:00 PM</option>
              <option value="07:30 PM">07:30 PM</option>
              <option value="08:00 PM">08:00 PM</option>
              <option value="08:30 PM">08:30 PM</option>
              <option value="09:00 PM">09:00 PM</option>
              <option value="09:30 PM">09:30 PM</option>
              <option value="10:00 PM">10:00 PM</option>
            </select>
            {errors.time && <span className="error-msg">{errors.time}</span>}
          </div>
        </div>

        <div className="form-group full-width">
          <label>Special Requests</label>
          <textarea
            name="specialRequests"
            placeholder="Any dietary requirements, special occasions, seating preferences..."
            value={formData.specialRequests}
            onChange={handleChange}
            rows={4}
          />
        </div>

        <button type="submit" className="submit-btn">
          🍽️ Reserve My Table
        </button>

      </form>
    </div>
  )
}