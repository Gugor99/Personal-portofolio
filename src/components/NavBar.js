import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/gabedode.new.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { useTranslation } from "react-i18next";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [activeLang, setActiveLang] = useState('ita');
  const [scrolled, setScrolled] = useState(false);
  const [t, i18n] = useTranslation("global")

  const handleChangeLanguage = (lang) => {
    setActiveLang(lang)
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>{t("navbar.skills")}</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>{t("navbar.projects")}</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="https://it.linkedin.com/in/gabriele-canova-72aa3625b?trk=people-guest_people_search-card"><img src={navIcon1} alt="Linkedin Logo" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Gugor99"><img src={navIcon2} alt="Github Logo" /></a>                
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>{t("navbar.connect")}</span></button>
              </HashLink>
              <div className="lang-box">
                <h3 className={activeLang === 'ita' ? 'active' : ''} onClick={() => handleChangeLanguage("ita")}>ITA</h3>              
                <h2>/</h2>              
                <h3 className={activeLang === 'en' ? 'active' : ''} onClick={() => handleChangeLanguage("en")}>EN</h3>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
