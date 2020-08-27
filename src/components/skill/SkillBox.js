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
                <p className="skill-para">I'm baby meditation tofu chillwave, 
                   distillery messenger bag thundercats 
                   chicharrones kale chips gochujang. 
                   Banh mi direct trade marfa salvia.</p>
            </div>
        )
    }
}

export default SkillBox
