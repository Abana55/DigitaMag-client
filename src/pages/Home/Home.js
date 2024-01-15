import React from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [articles, setArticles] = useState([])
    const navigate = useNavigate();

    const handleWriteArticle = () => {
        navigate('/write-article'); // This is the route for the article submission form
    };
    return (
        <div className="home">
            <nav className="navbar">
                {/* Navbar content */}
            </nav>
            <section className="home__hero">
                <div className="hero-content">
                    <h1>Welcome to Our Magazine</h1>
                    <p>Explore the future as imagined in the past.</p>
                    <button onClick={handleWriteArticle} className="home__button--write">Write New Article</button>
                </div>
            </section>

            <section className="home__featured-articles">
                {/* Display featured articles here */}
            </section>

            <section className="home__categories">
                {/* Category selection here */}
            </section>
        </div>
    );
};
export default Home;