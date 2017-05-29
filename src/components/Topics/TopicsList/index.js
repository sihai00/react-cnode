import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './css/index.css'
import { getArticleTab, getLastTime } from '../../../tool'

class TopicsList extends Component {
  render() {
    let { data } = this.props
    return (
      <section className="artlist">
        <ul>
          {
            data && data.map((v, i) => {
              return (
                <li className="artlist-item" key={i}>
                  <Link to={`/topic/${v.id}`}>
                    <div className="artlist-title"><span className="label label-success">{getArticleTab(v.tab, v.good, v.top)}</span><strong>{v.title}</strong>
                    </div>
                    <div className="content clearfix">
                      <img src={v.author.avatar_url} alt="logo"/>
                      <div className="info">
                        <div className="info-item"><span>{v.author.loginname}</span><span>{v.reply_count}/{v.visit_count}</span></div>
                        <div className="info-item"><time>创建时间：{v.create_at.split('T')[0]}</time><time>{getLastTime(v.last_reply_at)}</time></div>
                      </div>
                    </div>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

export default TopicsList