import React, { useState } from 'react';
import '../App.css';

interface SearchProps {
  onProductSearch: (product: string) => void;
}

function Search({ onProductSearch }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onProductSearch(inputValue);
    setInputValue("");
  };

  return (
    
    <form className="Search" onSubmit={handleSubmit}>
      <input className="Search-input" type="text" value={inputValue} onChange={handleInputChange} placeholder="Search product..." />
      <button className="Search-button" type="submit">Add</button>
    </form>
);
}

export default Search;
