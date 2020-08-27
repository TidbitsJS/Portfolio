import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import 'components/skill/skill.css'
import SkillBox from 'components/skill/SkillBox'
import { html, react, javascript, cpp, python, bootstrap } from 'components/skill/SkillData'

export class Skill extends Component {
    render() {
        return (
            <div className="skills">
                <Container fluid>
                    <div className="skill">
                        <h1>My Skills</h1>
                        <div className="underline"></div>
                        <div className="skill-group">
                            <div><SkillBox data={html}/></div>
                            <div><SkillBox data={react}/></div>
                            <div><SkillBox data={javascript}/></div>
                            <div><SkillBox data={cpp}/></div>
                            <div><SkillBox data={python}/></div>
                            <div><SkillBox data={bootstrap}/></div>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Skill
