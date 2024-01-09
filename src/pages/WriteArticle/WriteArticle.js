import React, { useState } from 'react';

const WriteArticle = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [authorName, setAuthorName] = useState('');
    const currentDate = new Date().toLocaleDateString();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Validation and submission logic goes here
    };

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Article Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write your article..."
            />
            <input
                type="file"
                onChange={handleImageChange}
            />
            <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Author Name"
            />
            <p>Posting Date: {currentDate}</p>
            <button type="submit">Submit Article</button>
        </form>
    );
};

export default WriteArticle;