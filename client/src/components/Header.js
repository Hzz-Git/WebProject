import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Sun, Moon } from 'lucide-react';
import '../App.css';

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <Navbar
      expand="lg"
      className={`header ${isDarkMode ? "shared-dark" : "shared-light"}`}
    >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className={isDarkMode ? "text-white" : "text-dark"}>Home</Nav.Link>
            <Nav.Link href="/about" className={isDarkMode ? "text-white" : "text-dark"}>About</Nav.Link>
            <Nav.Link href="/projects" className={isDarkMode ? "text-white" : "text-dark"}>Projects</Nav.Link>
            <Nav.Link href="/notes" className={isDarkMode ? "text-white" : "text-dark"}>Notes</Nav.Link>
          </Nav>
          <Button
            variant={isDarkMode ? "outline-light" : "outline-dark"}
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;