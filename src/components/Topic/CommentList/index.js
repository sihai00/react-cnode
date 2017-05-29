import React, { Component } from 'react'
import logo from '../../../img/logo.svg'
import './css/index.css'

class About extends Component {
  render() {
    return (
      <section className="comment">
        <ul>
          <li className="comment-item">
            <div className="content">
              <img src={logo} alt="logo"/>
              <div className="info">
                <div className="info-item">
                  <span>用户名</span>
                  <span className="label label-default">10赞</span>
                </div>
                <div className="info-item">
                  <time>发布于：2016-05-05</time>
                  <span className="label label-warning">回复</span>
                </div>
              </div>
            </div>
            <div className="coment-content">内容</div>
          </li>
        </ul>
      </section>
    )
  }
}

export default About