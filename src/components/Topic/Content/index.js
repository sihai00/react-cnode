import React, { Component } from 'react'
import { getArticleTab } from '../../../tool'
import './css/index.css'

class Content extends Component {
  render() {
    let { data } = this.props
    return (
      <section className="article">
        <h1>{data.title}</h1>
        <div className="content">
          <img src={data.author.avatar_url} alt="logo"/>
          <div className="info">
            <div className="info-item"><span>{data.author.loginname}</span><span className="label label-primary">{getArticleTab(data.tab, data.good, data.top)}</span></div>
            <div className="info-item"><time>发布于：{data.create_at.split('T')[0]}</time><time>{data.visit_count}次浏览</time></div>
          </div>
        </div>
        <div className="article-centent" dangerouslySetInnerHTML={{__html:data.content}}></div>
      </section>
    )
  }
}

export default Content