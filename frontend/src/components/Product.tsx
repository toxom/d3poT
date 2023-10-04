import React, { useState } from 'react';
import '../App.css';

import Search from './Search'; 
import PrinterIcon from '../assets/icons/PrinterIcon.svg';
import ScannerIcon from '../assets/icons/ScannerIcon.svg';
import RobotIcon from '../assets/icons/RobotIcon.svg';

type ProductCategory = "3D Printers" | "3D Scanners" | "Robots";

interface ProductProps {
  onAddProduct: (product: string) => void;
}

function Product({ onAddProduct }: ProductProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("3D Printers");
  const [products, setProducts] = useState<Record<ProductCategory, string[]>>({
    "3D Printers": [],
    "3D Scanners": [],
    "Robots": [],
  });

  const [trackedProducts, setTrackedProducts] = useState<string[]>([]);

  const formatProduct = (product: string) => {
    return product
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const handleProductAddition = (product: string) => {
    const formattedProduct = formatProduct(product);
    setProducts(prev => ({
      ...prev,
      [activeCategory]: [...prev[activeCategory], formattedProduct],
    }));
    onAddProduct(formattedProduct);
  };

  const getCategoryIcon = (category: ProductCategory) => {
    switch(category) {
      case "3D Printers":
        return <img src={PrinterIcon} alt="3D Printer Icon" />;
      case "3D Scanners":
        return <img src={ScannerIcon} alt="3D Scanner Icon" />;
      case "Robots":
        return <img src={RobotIcon} alt="Robot Icon" />;
      default:
        return null;
    }
  };

  const handleProductTrack = (product: string) => {
    if (trackedProducts.includes(product)) {
      setTrackedProducts(prev => prev.filter(p => p !== product));
    } else {
      setTrackedProducts(prev => [...prev, product]);
    }
  };

  return (
    <div>
      <h1>Product Search</h1>
      <Search onProductSearch={handleProductAddition} />

      <div className="product-category-buttons">
        {(["3D Printers", "3D Scanners", "Robots"] as ProductCategory[]).map(category => (
          <button 
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{backgroundColor: activeCategory === category ? 'lightgray' : 'white'}}
          >
            {getCategoryIcon(category)} {category}
          </button>
        ))}
      </div>

      <div>
        {products[activeCategory].map(product => (
          <div key={product} className="product-item">
            <button className="product-button">
            <input 
                type="checkbox" 
                onChange={() => handleProductTrack(product)}
                checked={trackedProducts.includes(product)}
            />
            {product} <span style={{ color: 'green', fontWeight: 'bold' }}>$500</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
