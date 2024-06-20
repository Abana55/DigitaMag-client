import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import WriteArticle from './pages/WriteArticle/WriteArticle';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import LoginForm from './components/LoginForm/LoginForm'; // Import the LoginForm component
import './App.css';
import { AuthProvider } from './components/context/AuthContect';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
      <Router>
        <AuthProvider>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/write-article" element={<WriteArticle />} />
              <Route path="/articles/:id" element={<ArticlePage />} />
              <Route path="/register" element={<RegistrationForm />} />
              <Route path="/login" element={<LoginForm />} /> {/* testing testing*/}
              <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;