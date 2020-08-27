import React, { Component } from 'react'
import { Container, Button } from 'react-bootstrap'
import Me from 'assets/me.jpeg'
import 'components/about/about.css' 

export class About extends Component {
    render() {
        return (
            <div>
               <Container  className="about-container" fluid style={{height: '100vh'}}>
                   <div className="container">
                       <div className="intro">
                           <h1><span>I'm</span> Sujata</h1>
                           <p>Self-taught Web Developer</p>
                           <Button>
                               <a href="#contact" 
                                  style={{textDecoration: 'none', fontSize: 23, color: 'white'}}>
                                      Contact Me
                               </a>
                           </Button>
                       </div>
                       <div className="image">
                           <img src={Me} alt="me"/>
                       </div>
                   </div>
               </Container>  
            </div>
        )
    }
}

export default About
