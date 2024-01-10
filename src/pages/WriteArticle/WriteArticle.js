import React, { useState } from "react";
import "./WriteArticle.scss";

const WriteArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState("");
  const currentDate = new Date().toLocaleDateString();

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
