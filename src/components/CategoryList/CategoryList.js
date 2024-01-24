import React from 'react';
import './CategoryList.scss'; 

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.length > 0 ? (
        <ul className="category-list__items">
          {categories.map(category => (
            <li key={category.id} className="category-list__item">
              {category.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="category-list__no-items">No categories found.</p>
      )}
    </div>
  );
};

export default CategoryList;