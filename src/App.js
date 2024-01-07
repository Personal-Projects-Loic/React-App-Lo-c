import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './TS/Pages/Home.tsx';
import CV from './TS/Pages/CV.tsx'

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<div>Projects Page</div>} />
          <Route path="/cv" element={<CV />} />
          <Route path="/competences" element={<div>Competences Page</div>} />
          <Route path="/contacts" element={<div>Contacts Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
        </Routes>
    </Router>
  );
}

export default App;