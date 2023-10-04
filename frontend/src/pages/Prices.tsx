import React from 'react';
import '../styles/Pages.css';


const Prices: React.FC = () => {
  return (
    <div className="content-prices">
      <h2>Prices</h2>

      <section className="price-history">
        <h3>Price History Chart</h3>
        <div className="chart-placeholder">
          {/* This is a placeholder for the price history chart. */}
          Chart will go here.
        </div>
      </section>

      <section className="markets">
        <h3>Markets</h3>
        <table>
          <thead>
            <tr>
              <th>Shop Name</th>
              <th>Price</th>
              <th>Availability</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td>Shop {index + 1}</td>
                <td>$100 + {index}</td>
                <td>In Stock</td>
                <td>4.{index} stars</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Prices;
