import React from 'react';
import '../styles/Pages.css';


const ProsCons: React.FC = () => {
  return (
    <div className="content-pros-cons">
      <h2>Pros & Cons</h2>

      <section className="model-reviews">
        <h3>Model Reviews</h3>
        <p>123 reviews</p>
        <div className="grid-reviews">
          {["Overall", "Ease of Use", "Customer Service"].map((text, index) => (
            <div key={index} className="review-category">
              <span>{text}</span>
              <span className="star-icon">★</span>
              <span>4.{index} stars</span>
            </div>
          ))}
        </div>
      </section>

      <section className="pros-cons-section">
        <div className="pros">
          <h4>Pros</h4>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="pros-item">
              <span className="icon">+</span> Sample positive text {index + 1}
            </div>
          ))}
          <button className="write-review-btn">WRITE A REVIEW</button>
        </div>
        
        <div className="cons">
          <h4>Cons</h4>
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="cons-item">
              <span className="icon">-</span> Sample negative text {index + 1}
            </div>
          ))}
          <button className="read-reviews-btn">READ REVIEWS</button>
        </div>
      </section>

    </div>
  );
}

export default ProsCons;
