import React, { useState, useEffect } from 'react'
import Project from 'assets/project.jpeg'
import 'components/fetch/project.css'

const ProjectBox = ({repo}) =>{
    const [query, setQuery] = useState(repo)
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

    var hrf = `https://tidbitsjs.github.io/${repo}`

    console.log(repoData.html_url)
    return (
        <div className="project-box">
            <div className="project-head">
              <img src={Project} alt="project"/>
              <a href={hrf}
                 style={{textDecoration: 'none'}} 
                 className="project-icon">
                 <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-info">
                <h4>{repoData.name}</h4>
                <p> Web Development Project developed with HTML5, CSS3, Javascript, ReactJS, bootstrap and other.
                    Click on HOME button to see live demo of project. You can get the source code by clicking the link below. 
                    Other info is available on my Github profile. Do visit for more</p>
                <div className="project-foot">
                    <span>
                      <i className="fab fa-github"></i>
                    </span>
                    <a href={repoData.html_url}
                       style={{textDecoration: 'none'}}
                    > Source Code </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectBox
