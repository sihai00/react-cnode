import React, { Component } from 'react'
import './css/index.css'

class Slide extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      tab: [
        {'title' : '全部', 'type' : 'all'},
        {'title' : '精华', 'type' : 'good'},
        {'title' : '分享', 'type' : 'share'},
        {'title' : '问答', 'type' : 'ask'},
        {'title' : '招聘', 'type' : 'job'}
      ]
    }
  }
  render() {
    let { changeTab } = this.props
    return (
      <section className="slide">
        <ul>
          {
            this.state.tab && this.state.tab.map((v, i) => {
              return (
                <li onClick={() => changeTab(v.type)} 
                    className={this.props.tab === v.type ? 'active' : ''} 
                    key={i}
                >{v.title}</li>
              )
            })
          }
        </ul>
      </section>
    )
  }
}

export default Slide