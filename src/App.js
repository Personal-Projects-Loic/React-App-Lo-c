import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './TS/Pages/Home.tsx';
import BurgerMenu from './TS/Components/BurgerMenu.tsx';

function App() {
  return (
    <Router>
      <div>
        <BurgerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/cv" element={<div>CV Page</div>} />
          <Route path="/competences" element={<div>Competences Page</div>} />
          <Route path="/contacts" element={<div>Contacts Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;