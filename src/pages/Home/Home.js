import React from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import './Home.scss';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const handleWriteArticle = () => {
        navigate('/write-article'); // This should be the route for the article submission form
    };
    return (
        <div>
            <button onClick={handleWriteArticle}>Write New Article</button>
        </div>
    );
};

export default Home;