import React from 'react';
import ArticleList from '../../components/ArticleList/ArticleList';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <ArticleList />
            {/* Other home page content */}
        </div>
    );
};

export default Home;