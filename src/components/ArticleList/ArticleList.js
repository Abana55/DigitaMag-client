import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Article from '../Article/Article';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('/api/articles')
            .then(res => setArticles(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {articles.map(article => (
                <Article key={article._id} {...article} />
            ))}
        </div>
    );
};

export default ArticleList;