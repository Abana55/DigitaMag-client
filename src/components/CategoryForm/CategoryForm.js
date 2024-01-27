import React, { useState } from 'react';
import axios from 'axios';

const CategoryForm = () => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/categories', { name: categoryName });
      
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={categoryName} 
        onChange={(e) => setCategoryName(e.target.value)} 
        placeholder="Category Name" 
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default CategoryForm;