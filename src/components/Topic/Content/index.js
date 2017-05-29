import React, { Component } from 'react'
import logo from '../../../img/logo.svg'
import './css/index.css'

class Content extends Component {
  render() {
    return (
      <section className="article">
        <h1>标题</h1>
        <div className="content">
          <img src={logo} alt="logo"/>
          <div className="info">
            <div className="info-item"><span>用户名</span><span className="label label-primary">精品</span></div>
            <div className="info-item"><time>发布于：2017-06-06</time><time>222次浏览</time></div>
          </div>
        </div>
        <div className="article-centent">内容</div>
      </section>
    )
  }
}

export default Content