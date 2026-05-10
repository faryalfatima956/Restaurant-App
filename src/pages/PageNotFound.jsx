// PageNotFound.jsx
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">

      {/* Decorative background circles */}
      <div className="bg-circle circle-1" />
      <div className="bg-circle circle-2" />
      <div className="bg-circle circle-3" />

      <div className="notfound-content">

        {/* 404 Number */}
        <div className="notfound-number">
          <span>4</span>
          <span className="plate-icon">🍽️</span>
          <span>4</span>
        </div>

        {/* Divider */}
        <div className="notfound-divider">
          <span></span>
          <span className="divider-icon">✦</span>
          <span></span>
        </div>

        {/* Text */}
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-desc">
          Oops! Looks like this page flew off the menu. <br />
          The dish you're looking for doesn't exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="notfound-btns">
          <button className="btn-home" onClick={() => navigate("/")}>
            🏠 Back to Home
          </button>
          <button className="btn-menu" onClick={() => navigate("/menu")}>
            🍛 View Menu
          </button>
        </div>

      </div>
    </div>
  );
}
