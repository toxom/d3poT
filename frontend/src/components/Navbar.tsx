import React from 'react';
import '../App.css';


interface NavbarProps {
  onSelectContent: (content: string | null) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelectContent }) => {
  return (
    <div className="navbar">
      {['Overview', 'Prices', 'Alternatives', 'Pros & Cons', 'Video Reviews', 'Reviews', 'Comparison'].map(item => (
        <button key={item} onClick={() => onSelectContent(item)}>
          {item}
        </button>
      ))}
    </div>
  );
}

export default Navbar;
