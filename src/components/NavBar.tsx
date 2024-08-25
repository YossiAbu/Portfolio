import { useEffect, useState } from "react";
import { useActiveLink } from "../hooks/useActiveLink";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import linkdeinIcon from '../assets/img/linkdein-icon.svg';
import facebookIcon from '../assets/img/facebook-icon.svg';
import instagramIcon from '../assets/img/instagram-icon.svg';

export const NavBar = () => {
  const { activeLink, onUpdateActiveLink } = useActiveLink();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/portfolio/">
          <img src={logo} alt="Logo" className="main-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yossi-abu-/"><img src={linkdeinIcon} alt="linkdein" /></a>
              <a href="https://www.facebook.com/yossi.abuu?mibextid=LQQJ4d"><img src={facebookIcon} alt="facebook" /></a>
              <a href="https://www.instagram.com/yossi_abu?igsh=MTZ5bzBqd2Njb2psYw%3D%3D&utm_source=qr"><img src={instagramIcon} alt="instagram" /></a>
            </div>
            <button className="btn-global" onClick={() => onUpdateActiveLink('contact')}>
              Let's Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
