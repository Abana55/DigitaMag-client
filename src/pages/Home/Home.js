import React from "react";
import ArticleList from "../../components/ArticleList/ArticleList";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ArticleCarousel from "../../components/ArticleCarousel/ArticleCarousel";
import CategoryList from '../../components/CategoryList/CategoryList';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchArticles = async () => {
    const response = await axios.get("http://localhost:3000/api/articles");
    setArticles(response.data);
  };

  const fetchCategories = async () => {
    const response = await axios.get("http://localhost:3000/api/categories");
    setCategories(response.data);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([fetchArticles(), fetchCategories()]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleWriteArticle = () => {
    navigate("/write-article");
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;


  return (
    <div className="home">
      <nav className="navbar">{/* Navbar content */}</nav>
      <section className="home__hero">
        <div className="hero-content">
          <h1>Welcome to Our Magazine</h1>
          <p>Explore the future as imagined in the past.</p>
          <button onClick={handleWriteArticle} className="home__button--write">
            Write New Article
          </button>
        </div>
      </section>
      
      <section className="home__featured-articles">
        <h2>Featured Articles</h2>
        <ArticleCarousel articles={articles} /> {/* Pass fetched articles */}
      </section>

      {/* Once you have category data, pass it to CategoryList */}
      <section className="home__categories">
        <h2>Categories</h2>
        <CategoryList categories={categories} />
      </section>
    </div>
  );
};
export default Home;
