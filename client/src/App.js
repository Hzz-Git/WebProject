import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
<<<<<<< HEAD
import About from './pages/About';
=======
// import About from './pages/About';
>>>>>>> 40da6543eeb2f1e5af2516769f82df2a8d1e6a0f
// import Projects from './pages/Projects';
// import Notes from './pages/Notes';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', newMode);
      return newMode;
    });
  };

  return (
    <Router>
      <div className={isDarkMode ? "shared-dark" : "shared-light"}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
          {/* <Route path="/projects" element={<Projects />} />
=======
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
>>>>>>> 40da6543eeb2f1e5af2516769f82df2a8d1e6a0f
          <Route path="/notes" element={<Notes />} /> */}
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
}

export default App;