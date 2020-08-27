import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import ProjectBox from 'components/fetch/ProjectBox'
import {Button} from 'react-bootstrap'

const Projects = () => {
    const [query, setQuery] = useState('Contact-Manager')
    const [repoData, setData] = useState({})

    useEffect(() => {
        console.log("Hello")
        fetch(`https://api.github.com/repos/TidbitsJS/${query}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setData(data)
            })
    }, [query])

    console.log(repoData.html_url)
    return (
        <div className="projects">
            <Container fluid>
                <div className="project-title">
                    <h1>My Projects</h1>
                    <div className="underline"></div>
                </div>
                <div className="project-list">
                    <ProjectBox repoData={repoData}/>
                    <ProjectBox repoData={repoData}/>
                    <ProjectBox repoData={repoData}/>
                    <ProjectBox repoData={repoData}/>
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
