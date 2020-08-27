import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import About from 'components/about/About'
import Skill from 'components/skill/Skill'
import Projects from 'components/fetch/Projects'
import Contact from 'components/contact/Contact'

  export class Home extends Component {
      
      render() {
          return (
            <div className="home">
                 <Navbar collapseOnSelect expand="lg" 
                         bg="light"
                         style={{width: '100vw'}} 
                         fixed="top">
                    <Navbar.Brand href="#home" style={{fontSize: 27}}>
                       Portfolio
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse 
                      id="responsive-navbar-nav"
                      >
                        <Nav>
                             <Nav.Link href="#home">Home</Nav.Link>
                             <Nav.Link href="#skill" eventKey={2}>Skills</Nav.Link>
                             <Nav.Link href="#project" eventKey={3}>Projects</Nav.Link>
                             <Nav.Link href="#contact" eventKey={4}>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                 </Navbar>

                 <section id="home">
                     <About />
                 </section>
                 <section id="skill">
                     <Skill />
                 </section>
                 <section id="project">
                     <Projects />
                 </section>
                 <section id="contact">
                      <Contact />
                 </section>

                 <section>
                   <div className="footer">
                      <h1>
                        Made with love
                        <i className="fas fa-heart" 
                           style={{marginLeft: 15, color: 'red'}}></i>
                      </h1>
                      <p style={{marginTop: '1rem'}}>@Sujata Gunale</p>
                   </div>
                 </section>

            </div>
          )
    }
}

export default Home
