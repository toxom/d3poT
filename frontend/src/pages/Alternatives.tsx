// src/pages/Alternatives.tsx

import React from 'react';
import CardSmall from '../components/CardSmall';

const Alternatives: React.FC = () => {
  const sampleData = [
    {
      title: "Alternative 1",
      description: "This is an alternative product.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Alternative 2",
      description: "Another great alternative.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      title: "Alternative 3",
      description: "Yet another alternative choice.",
      imageUrl: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="content-alternatives">
      <div className="alternatives-grid">
        <h2>Alternatives</h2>
        {sampleData.map((data, index) => (
          <CardSmall key={index} {...data} />
          
        ))}
      </div>
    </div>
  );
}

export default Alternatives;
