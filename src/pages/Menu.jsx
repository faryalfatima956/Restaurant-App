// Menu.jsx
import { useState } from "react";
import menuItems from "../data/menuData";

const categories = ["All", "Starters", "Mains", "Desi", "Beverages", "Desserts"];

const DishCard = ({ name, description, price, image, isVeg }) => {
  return (
    <div className="dish-card">
      <div className="dish-image-wrapper">
        <img src={image} alt={name} className="dish-image" />
        {isVeg && <span className="veg-badge">🌿 Veg</span>}
      </div>
      <div className="dish-info">
        <h3 className="dish-name">{name}</h3>
        <p className="dish-description">{description}</p>
        <div className="dish-footer">
          <span className="dish-price">Rs. {price}</span>
          <button className="add-btn">Add to Order</button>
        </div>
      </div>
    </div>
  )
}

const Menu = () => {
  const [activeTab, setActiveTab] = useState("All")

  const filtered = activeTab === "All"
    ? menuItems
    : menuItems.filter((item) => item.category === activeTab)

  return (
    <section className="menu-section">

      <div className="menu-header">
        <p className="menu-subtitle">Explore</p>
        <h1 className="menu-title">A Taste of Pakistan</h1>
        <p className="menu-tagline">
          Every dish is crafted with love, tradition, and the finest Pakistani spices.
        </p>
        <div className="header-divider">
          <span></span>
          <span className="divider-icon">✦</span>
          <span></span>
        </div>
      </div>

      <div className="tab-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeTab === cat ? "tab-active" : ""}`}
            onClick={() => setActiveTab(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="dishes-grid">
          {filtered.map((item) => (
            <DishCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              isVeg={item.isVeg}
            />
          ))}
        </div>
      ) : (
        <p className="no-items">No items found in this category.</p>
      )}

    </section>
  )
}

export default Menu;