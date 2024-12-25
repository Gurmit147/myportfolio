import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Languages from './pages/Languages';
import Frameworks from './pages/Frameworks';
import Work from './pages/Work';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/frameworks" element={<Frameworks />} />
          <Route path="/work" element={<Work />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
