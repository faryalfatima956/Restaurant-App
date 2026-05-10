import React from 'react'
import Reservation from './Reservation'

export default function Home() {
  return (
      <div>
    <section className="hero">
  <div className="hero-content">
    <h1>Where Taste Meets Authentic Flavours</h1>
    <p>Fresh, spicy and unforgettable Pakistani cuisine delivered to your table</p>

    <div className="hero-buttons">
      <a href="/contact">
        <button className="primary-btn">Order Now</button></a>
    

      <a href="/reservation">
        <button className="secondary-btn">Reserve Table</button>
      </a>
    </div>
  </div>
</section>

      <section className="section">
        <h2>Featured Dishes</h2>
        <div className="cards">
          <div className="card">
            <img src="image.png" alt="" /><br />
            Biryani</div>
          <div className="card">
            <img src="https://media.istockphoto.com/id/673858790/photo/butter-chicken-curry-with-tender-chicken-breast-cream-butter-honey.webp?a=1&b=1&s=612x612&w=0&k=20&c=aYEO4uYB3b2vh5OcsL2CRJ6Z9xRf6CXzjnTghQY5qm4=" alt="" /><br />
            karahi</div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1633436375795-12b3b339712f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlYmFifGVufDB8fDB8fHww" alt="" /><br />
            kebab</div>
            <br /><br /> 
        </div>
        <br />
            <h2>Now Added to Menu</h2>
              <div className="cards">
                <div className="card">
                  <img src="https://media.istockphoto.com/id/1480827583/photo/rice-pudding-served-in-clay-bowl-indian-rice-kheer-with-nuts-on-a-wooden-background-popular.webp?a=1&b=1&s=612x612&w=0&k=20&c=bfzo9QG6cVivIOLBI10Cyxi-MfGTq0E8tQbpEZvglLM=" alt="" />
                  <br />Kheer
                </div>
                <div className="card">
                  <img src="https://media.istockphoto.com/id/163064596/photo/gulab-jamun.webp?a=1&b=1&s=612x612&w=0&k=20&c=F_5_AgCdrsecO13W-wiuCZAwYZPBpN3UETTyYtQQlLM=" alt="" /><br />Gulab Jamun
                </div>
                <div className="card">
                  <img src="https://plus.unsplash.com/premium_photo-1716152295675-595f7a5a1d54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnJvd25pZXxlbnwwfHwwfHx8MA%3D%3D" alt="" /><br />Brownie
                 
                </div>
              </div>
              <br />
                <h2>For more Dishes</h2>
              <p>Visit our menu page for a complete list of our delicious dishes and special offers.</p>
              <br />
              <a href="/menu">
                <button className="primary-btn">View Menu</button>
              </a>
          </section>
            </div>
      )
}
