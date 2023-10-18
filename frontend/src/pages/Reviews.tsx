import React from 'react';
import AddProduct from '../components/AddProduct'
import '../styles/Pages.css';
import FormProduct from '../components/FormProduct'



const Reviews: React.FC = () => {
  return (
    <div className="content-reviews">
      <h2>Reviews</h2>
      <AddProduct />
      {/* Add your content related to reviews here */}
    </div>
  );
}

export default Reviews;
