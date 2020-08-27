import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ProjectBox from 'components/fetch/ProjectBox'
import {Button} from 'react-bootstrap'

const Projects = () => {

    return (
        <div className="projects">
            <Container fluid>
                <div className="project-title">
                    <h1>My Projects</h1>
                    <div className="underline"></div>
                </div>
                <div className="project-list">
                    <ProjectBox repo="Tweet-App"/>
                    <ProjectBox repo="Github-Jobs"/>
                    <ProjectBox repo="Food-Menu"/>
                    <ProjectBox repo="Weather-App"/>
                    <ProjectBox repo="Typing-Game"/>
                </div>
                <div className="more">
                   <Button variant="danger">
                       <a href="https://github.com/TidbitsJS"
                          style={{textDecoration: 'none', color: 'black'}}
                       >
                           More
                       </a>
                   </Button>
                </div>
            </Container>
        </div>
    )
}

export default Projects
