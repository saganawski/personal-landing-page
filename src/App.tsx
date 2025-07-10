import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import AllBlogs from './components/AllBlogs';
import Resume from './components/Resume';
import FreeLandingPage from './components/FreeLandingPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<AllBlogs />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/free-landing-page" element={<FreeLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;