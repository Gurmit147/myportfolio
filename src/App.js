import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Languages from './pages/Languages';
import Frameworks from './pages/Frameworks';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutme />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/frameworks" element={<Frameworks />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
