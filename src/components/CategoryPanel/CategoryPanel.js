import React from 'react';
import './CategoryPanel.scss'; 

const CategoryPanel = ({ categories }) => {
  return (
    <div className="category-panel">
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPanel;