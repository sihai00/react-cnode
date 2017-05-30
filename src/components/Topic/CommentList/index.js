import React, { Component } from 'react'
import './css/index.css'

class About extends Component {
  render() {
    let { replies } = this.props
    return (
      <section className="comment">
        <ul>
          <li className="comment-item">
            <div className="content">
              <img src={replies.author.avatar_url} alt="logo"/>
              <div className="info">
                <div className="info-item">
                  <span>{replies.author.loginname}</span>
                  <span className="label label-default">{replies.ups.length}赞</span>
                </div>
                <div className="info-item">
                  <time>发布于：{replies.create_at.split('T')[0]}</time>
                  <span className="label label-warning">回复</span>
                </div>
              </div>
            </div>
            <div className="coment-content" dangerouslySetInnerHTML={{__html:replies.content}}></div>
          </li>
        </ul>
      </section>
    )
  }
}

export default About