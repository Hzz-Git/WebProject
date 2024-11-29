import React from 'react';
<<<<<<< HEAD

const Footer = () => {
  return (
    <footer className="footer-section">
      <p className="footer-copyright">
        © 2024 Zeng Hao. All rights reserved.
      </p>
=======
import '../App.css'; 

const Footer = ({ isDarkMode }) => {
  return (
    <footer className={`footer ${isDarkMode ? "shared-dark" : "shared-light"}`}>
      <p className="mb-0">&copy; 2024 Zeng Hao. All rights reserved.</p>
>>>>>>> 40da6543eeb2f1e5af2516769f82df2a8d1e6a0f
    </footer>
  );
};

<<<<<<< HEAD
export default Footer;
=======
export default Footer;
>>>>>>> 40da6543eeb2f1e5af2516769f82df2a8d1e6a0f
