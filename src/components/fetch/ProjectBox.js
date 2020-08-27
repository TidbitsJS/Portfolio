import React from 'react'
import Project from 'assets/project.jpeg'
import 'components/fetch/project.css'

const ProjectBox = ({repoData}) =>{
    return (
        <div className="project-box">
            <div className="project-head">
              <img src={Project} alt="project"/>
              <a href="https://github.com/TidbitsJS"
                 style={{textDecoration: 'none'}} 
                 className="project-icon">
                 <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="project-info">
                <h4>{repoData.name}</h4>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Rerum eveniet amet odit aperiam, 
                    provident cum possimus sapiente minus quos! Ipsum?  </p>
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
