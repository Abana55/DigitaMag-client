import React, { useState } from 'react';
import axios from 'axios';
import './CategoryForm.scss';

const CategoryForm = () => {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await axios.post('http://localhost:3000/api/categories', formData);
      setMessage('Category added successfully!');
      setFormData({ name: '', description: '' });
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.error || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="category-form">
      <form onSubmit={handleSubmit} className="category-form__form">
        <div className="category-form__input-group">
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Category Name"
            className="category-form__input"
            required
          />
        </div>
        <div className="category-form__input-group">
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Category Description"
            className="category-form__textarea"
            required
          />
        </div>
        <button type="submit" disabled={loading} className="category-form__button">
          Add Category
        </button>
      </form>
      {message && <p className="category-form__message">{message}</p>}
    </div>
  );
};

export default CategoryForm;