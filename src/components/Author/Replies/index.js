import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/index.css'

class Replies extends Component {
  constructor(content, props){
    super(content, props)
    this.state = {
      recent: 'replies'
    }
  }
  handleCLick(str){
    this.setState({
      recent: str
    })
  }
  render() {
    let { recent_replies, recent_topics } = this.props
    const render = this.state.recent === 'replies' ? recent_replies : recent_topics

    return (
      <section className="recent">
        <div className="recent-select">
          <span className={this.state.recent === 'replies' ? 'active' : ''} onClick={() => {
            this.handleCLick('replies')
          }}>最近回复</span>
          <span className={this.state.recent === 'topics' ? 'active' : ''} onClick={() => {
            this.handleCLick('topics')
          }}>最新发布</span>
        </div>
        <ul className="recent-content">
          {
            render.length
            ? render.map((v, i) => {
                return (
                  <li key={i}>
                    <Link to={'/topic/' + v.id}>
                      <div className="content clearfix">
                        <img src={v.author.avatar_url} alt="logo"/>
                        <div className="info">
                          <div className="info-item"><strong>{v.title}</strong></div>
                          <div className="info-item">
                            <span>{v.loginname}</span>
                            <span>{v.last_reply_at.split('T')[0]}</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })
            : <li><div>暂无话题</div></li>
          }
        </ul>
      </section>
    )
  }
}

export default Replies