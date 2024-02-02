import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./WriteArticle.scss";

const WriteArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const currentDate = new Date().toLocaleDateString();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/categories');
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation and submission logic goes here
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit} className="article-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Article Title"
        className="article-form__input--title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your article..."
        className="article-form__textarea--content"
      />
      <label className="article-form__label--file">
        <input
          type="file"
          onChange={handleImageChange}
          className="article-form__input--file"
        />
        Upload Image
      </label>
      <input
        type="text"
        value={authorName}
        onChange={(e) => setAuthorName(e.target.value)}
        placeholder="Author Name"
        className="article-form__input--author"
      />
      <p className="article-form__date">Posting Date: {currentDate}</p>
      <button type="submit" className="article-form__button--submit">
        Submit Article
      </button>
    </form>
  );
};

export default WriteArticle;
