import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './TS/Pages/Home.tsx';
import CV from './TS/Pages/CV.tsx';
import Blog from './TS/Pages/Blog.tsx';
import Competences from './TS/Pages/Competences';
import Projects from './TS/Pages/Projects';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/competences" element={<Competences />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
    </Router>
  );
}

export default App;