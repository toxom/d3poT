import React, { useState } from 'react';
import '../App.css';

import Search from './Search'; 
import PrinterIcon from '../assets/icons/PrinterIcon.svg';
import ScannerIcon from '../assets/icons/ScannerIcon.svg';
import RobotIcon from '../assets/icons/RobotIcon.svg';

type ProductCategory = "3D Printers" | "3D Scanners" | "Robots";

interface ProductProps {
  onAddProduct: (product: string) => void;
  activeCategory: ProductCategory;
  setActiveCategory: React.Dispatch<React.SetStateAction<ProductCategory>>;


}

function Product({ onAddProduct, activeCategory, setActiveCategory }: ProductProps) {
  const [products, setProducts] = useState<Record<ProductCategory, string[]>>({
    "3D Printers": [],
    "3D Scanners": [],
    "Robots": [],
  });

  const [trackedProducts, setTrackedProducts] = useState<string[]>([]);

  type SubFilter = "Application" | "Size" | "Materials" | "Accuracy" | "Surface" | "Budget" | "Object" ; // ... Add other subfilter types here

  const FILTER_OPTIONS: Record<ProductCategory, Record<SubFilter, { name: string, tooltip?: string }[]>> = {
    "3D Printers": {
      "Application": [
        {name: "Novice", tooltip: "For beginners!"}, 
        {name: "Hobbyist"}, 
        {name: "Professional"}, 
        {name: "Industrial"}
      ],
      "Size": ["300 mm <", "< 400 mm <", "< 800 mm"].map(o => ({name: o})),
      "Materials": [
        {name: "PLA"}, 
        {name: "PETG"}, 
        {
          name: "ABS", 
          // tooltip: {
          //   name: "Acrylonitrile Butadiene Styrene",
          //   style: {
          //     fontSize: "16px", // Customize the font size
          //     transition: "opacity 0.3s ease-in-out", // Add a custom transition
          //   },
          // },
       },
    ],
      "Accuracy": ["PLA", "PETG", "ABS"].map(o => ({name: o})),
      "Surface": ["PLA", "PETG", "ABS"].map(o => ({name: o})),
      "Budget": ["PLA", "PETG", "ABS"].map(o => ({name: o})),
      "Object": [] // added an empty array as a placeholder
    },
    "3D Scanners": {
      "Application": ["Option 1", "Option 2", "Option 3"].map(o => ({name: o})),
      "Size": ["Tiny", "Average", "Huge"].map(o => ({name: o})),
      "Materials": [], 
      "Accuracy": [], 
      "Surface": [], 
      "Budget": [],
      "Object": []
    },
    "Robots": {
      "Application": ["Option A", "Option B", "Option C"].map(o => ({name: o})),
      "Size": ["Mini", "Regular", "Giant"].map(o => ({name: o})),
      "Materials": [], 
      "Accuracy": [], 
      "Surface": [], 
      "Budget": [],
      "Object": []
    },
};

  
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
      {/* <h1>Product Search</h1> */}
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

      <div className="product-filters">
        <h2>Filters for {activeCategory}</h2>
        {Object.entries(FILTER_OPTIONS[activeCategory]).map(([subFilter, options]) => (
          <div key={subFilter} className="subfilter-section">
            <h3>{subFilter}</h3>
            <div className="subfilter-options">
              {options.map(filter => (
                <button 
                  key={filter.name} 
                  className="filter-button"
                  title={filter.tooltip}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
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
