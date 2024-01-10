import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Article.scss';

const Article = ({ id, title, content, author, date, initialLikes }) => {
    const [likes, setLikes] = useState(initialLikes || 0);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const navigate = useNavigate();

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikes(isLiked ? likes - 1 : likes + 1);
    };

    const handleWriteArticle = () => {
        navigate(`/src/pages/WriteArticle/WriteArticle.js/${id}`); // Navigate to the article writing page with the current article's context
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div className="article">
            <h2 className="article-title">{title}</h2>
            <p className="article-content">{content}</p>
            <div className="article-info">
                <span className="article-author">{author}</span>
                <span className="article-date">{date}</span>
            </div>
            <div className="article-actions">
                <button onClick={handleLike} className="like-button">
                    {isLiked ? 'Unlike' : 'Like'} ({likes})
                </button>
                <button onClick={handleWriteArticle} className="write-article-button">
                    Write a Related Article
                </button>
            </div>
            <div className="comments-section">
                <form onSubmit={handleCommentSubmit} className="comment-form">
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="comment-input"
                    />
                    <button type="submit" className="submit-comment-button">Submit Comment</button>
                </form>
                <div className="comments-list">
                    {comments.map((comment, index) => (
                        <p key={index} className="comment">{comment}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Article;