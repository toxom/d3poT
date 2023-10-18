import logo from './logo.svg';
import './App.css';
import './styles/Pages.css'; // Import styles


import React, { useState } from 'react';

import Product from './components/Product';
import Navbar from './components/Navbar';
import ModalScreen from './components/ModalScreen';
import Filters from './components/Filters';

function App() {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"3D Printers" | "3D Scanners" | "Robots">("3D Printers");

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>d3poT</h1>
        </div>
      </header>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '30%' }}>
       <Product 
          onAddProduct={(product: string) => console.log("Product added:", product)} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory}
        />
        {/* <Filters activeCategory={activeCategory} /> */}

        </div>
        <div style={{ width: '70%' }}>
          <Navbar onSelectContent={setSelectedContent} />
          <ModalScreen selectedContent={selectedContent} />
        </div>
      </div>
    </div>
  );
}

export default App;
