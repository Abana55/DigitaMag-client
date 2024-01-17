import React from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import './Home.scss';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/articles');
                setArticles(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching articles:', error);
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const handleWriteArticle = () => {
        navigate('/write-article');
    };

    if (isLoading) {
        return <div>Loading...</div>; // Loading state
    }

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
                <h2>Featured Articles</h2>
                <ArticleCarousel articles={[]} />
            </section>

            <section className="home__categories">
                <h2>Categories</h2>
                <CategoryList categories={[]} />
            </section>
        </div>
    );
};
export default Home;