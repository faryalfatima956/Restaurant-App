// Contact.jsx
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim())    newErrors.name    = "Name is required";
    if (!formData.email.trim())   newErrors.email   = "Email is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className="contact-page">

      {/* ── Page Header ── */}
      <div className="contact-header">
        <p className="contact-sub">We'd Love to Hear From You</p>
        <h2 className="contact-title">Contact Us</h2>
        <div className="header-divider">
          <span></span>
          <span className="divider-icon">✦</span>
          <span></span>
        </div>
      </div>

      {/* ── Info Strip (Phone + Hours) ── */}
      <div className="contact-info-strip">
        <div className="info-item">
          <span className="info-icon">📞</span>
          <span>0300-1234567</span>
        </div>
        <div className="info-divider" />
        <div className="info-item">
          <span className="info-icon">🕐</span>
          <span>Open: 10AM – 11PM</span>
        </div>
      </div>

      {/* ── Form Card ── */}
      <div className="contact-form-wrapper">

        {/* Ternary – success OR form */}
        {submitted ? (
          <div className="success-card">
            <div className="success-emoji">🎉</div>
            <h3 className="success-title">Message Sent!</h3>
            <p className="success-text">
              Shukriya, <strong>{formData.name}</strong>! We'll reply to{" "}
              <strong>{formData.email}</strong> shortly. 🍽️
            </p>
            <button className="reset-btn" onClick={handleReset}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "input-error" : ""}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "input-error" : ""}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={errors.message ? "input-error" : ""}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            <button type="submit" className="send-btn">
              ✉️ Send Message
            </button>

          </form>
        )}
      </div>

    </div>
  );
}