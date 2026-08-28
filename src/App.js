import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Languages from './pages/Languages';
import Frameworks from './pages/Frameworks';
import Work from './pages/Work';
import Awards from './pages/Awards';
import Contact from './pages/Contact';

import CyberBackground from './components/CyberBackground';

function App() {
  return (
    <Router>
      <div className="App relative min-h-screen bg-[#030712] text-slate-100 font-space selection:bg-cyan-500 selection:text-black">
        <CyberBackground />
        <div className="relative z-10">
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
      </div>
    </Router>
  );
}

export default App;
