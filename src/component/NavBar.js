import { useState , useEffect } from 'react';
import { Navbar , Container , Nav } from "react-bootstrap"
import navIcon1 from "../images/nav-icon1.png"
import navIcon2 from "../images/nav-icon2.png"
import navIcon3 from "../images/nav-icon3.png"
import React from 'react'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if (window.scrollY > 50){
        setScrolled (true);
      }else{
        setScrolled (false);
      }
    }

    window.addEventListener("scroll",onScroll);
    return ()=> window.removeEventListener("scroll",onScroll)

  }, [])
  const onUpdateActiveLink =(value)=>{
    setActiveLink(value)
    
  }
  return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home" id="logo">Joshwa
          {/* <img src={logo} alt="logo"/> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>

            <div  id='jos'><a className="joshwa" href='3'><img className='set' src={navIcon1} alt=""/></a></div>
          <div  id="jos"><a className="joshwa" href='3'><img className='set' src={navIcon2} alt=""/></a></div>
          <div  id='jos'><a className="joshwa" href='3'><img className='set' src={navIcon3} alt=""/></a></div>
          <button className="nav-btn" onClick={()=> console.log("connect")}><span>Let's Connect </span></button>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

        

