import React, { Component } from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import About from 'components/About'
import Skill from 'components/Skill'

  export class Home extends Component {
      
      render() {
          return (
            <div className="home">
                 <Navbar collapseOnSelect expand="lg"  variant="light">
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
                 <section id="#home">
                    <About />
                 </section>
                 <section id="#skill">
                     <Skill />
                 </section>
            </div>
          )
    }
}

export default Home
