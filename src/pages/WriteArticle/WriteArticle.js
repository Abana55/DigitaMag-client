import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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
        const response = await axios.get(
          "http://localhost:3000/api/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const articleData = {
      title,
      content,
      authorName,
      categoryId: selectedCategory,  
    };
  
    try {
      await axios.post("http://localhost:3000/api/articles", articleData);
      navigate("/");
    } catch (error) {
      console.error("Error submitting article:", error);
    }
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  return (
    <div className="article-form">
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
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="article-form__select--category"
      >
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
      <p className="article-form__date">Posting Date: {currentDate}</p>
      <button onClick={handleSubmit} className="article-form__button--submit">
        Submit Article
      </button>
    </div>
  );
};

export default WriteArticle;
