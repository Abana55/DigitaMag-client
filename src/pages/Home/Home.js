import React from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import './Home.scss';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const handleWriteArticle = () => {
        navigate('/write-article'); // This is the route for the article submission form
    };
    return (
        <div className="home retro-futuristic">
            <section className="home__hero">
                <h1>Welcome to Our Retro-Futuristic Magazine</h1>
                <p>Explore the future as imagined in the past.</p>
                <button onClick={handleWriteArticle} className="home__button--write">Write New Article</button>
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