// src/components/CardSmall.tsx

import React from 'react';
import '../styles/Cards.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardSmall: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="card-small">
      <img src={imageUrl} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default CardSmall;
