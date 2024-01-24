import React from 'react';
import './CategoryList.scss'; // Assuming you have a corresponding stylesheet

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.length > 0 ? (
        <ul>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li> // Adjust according to your data structure
          ))}
        </ul>
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
};

export default CategoryList;