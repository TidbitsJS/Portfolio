import React, { Component } from 'react'

export class SkillBox extends Component {
    render() {
     const data = this.props.data
     console.log(data)
        return (
            <div className="skill-box">
                <p className="skill-head"><i className={data.icon}></i></p>
                <h4 className="skill-subhead">{data.subText}</h4>
                <div className="dash"></div>
                <p className="skill-para"> {data.para} </p>
            </div>
        )
    }
}

export default SkillBox
