import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import Product from './components/Product';
import Tracker from './components/Tracker';
import History from './components/History';

function App() {
  const [trackedProducts, setTrackedProducts] = useState<string[]>([]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-logo-container">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>d3poT</h1>
        </div>

        <div className="Product">
            <Product onAddProduct={(product: string) => console.log("Product added:", product)} />
        
        </div>

        <div className="Tracking">
          <Tracker trackedProducts={trackedProducts} />
        </div>

        <div className="History">
          <History />
        </div>
      </header>
    </div>
  );
}

export default App;
