import React, { Component } from 'react'
import './css/index.css'

class About extends Component {
  render() {
    let { avatar_url, create_at, loginname, score } = this.props
    return (
      <section className="userInfo">
        <div className="user-logo">
          <img src={avatar_url} alt="logo"/>
        </div>
        <div className="user-name"><strong>{loginname}</strong></div>
        <div className="user-dec" ><strong>注册时间：{create_at.split('T')[0]}</strong><strong>积分：{score}</strong></div>
      </section>
    )
  }
}

export default About