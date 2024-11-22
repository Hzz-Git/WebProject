import React from 'react';
import '../App.css'; 

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? "shared-dark" : "shared-light"}`}>
      <p className="mb-0">&copy; 2024 Zeng Hao. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
