import { useEffect, useState } from "react";
import {Navbar, Container, Nav, Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";




export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);      
      } else {
        setScrolled(false)
      }      
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {   
    setActiveLink(value);
  }

  return(
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className=" text-white"> Portfolio
          {/* <img src="" alt="logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon text-white"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link text-white' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'skills' ? 'active navbar-link text-white' : 'navbar-link text-white'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#link" className={activeLink === 'projects' ? 'active navbar-link text-white' : 'navbar-link text-white'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
          </Nav>
          <Container className="contactBx">
            <div className="socialContainer">
              <span className="socialLink"><FontAwesomeIcon icon={faSquareFacebook} /></span>
              <span className="socialLink"><FontAwesomeIcon icon={faSquareInstagram} /></span>
              <span className="socialLink"><FontAwesomeIcon icon={faSquareXTwitter} /></span>
            </div>
            <Button variant="light" size="sm" className="" onClick={() => console.log('connect')}><span>Let's Connect</span></Button>
          </Container>
          
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  );
}