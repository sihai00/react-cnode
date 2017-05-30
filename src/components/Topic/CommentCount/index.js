import React, { Component } from 'react'
import './css/index.css'

class About extends Component {
  render() {
    return (
      <section className="comment-num">
        <span className="label label-info mr4">{this.props.reply_count}</span><span>回复</span>
      </section>
    )
  }
}

export default About