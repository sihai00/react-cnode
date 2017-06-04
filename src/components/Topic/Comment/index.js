import React, { Component } from 'react'
import './css/index.css'

class Comment extends Component {
  constructor(content,props){
    super(content, props)
    this.state = {
      txt: this.props.reply_id ? `@${this.props.replyName} ` : ''
    }
  }
  handleClick(){
    this.props.handleClick(this.state.txt, this.props.topic_id, this.props.reply_id)

    this.props.changeInputId && this.props.changeInputId('')
    this.setState({
      txt: ''
    })
  }
  render() {
    let { style } = this.props
    return (
      <div className="comment-textarea" style={style}>
        <form>
          <textarea className="form-control" rows="3" onChange={e => this.setState({txt: e.target.value})} value={this.state.txt}></textarea>
          <button type="button" className="btn btn-success" onClick={this.handleClick.bind(this)}>提交</button>
        </form>
      </div>
    )
  }
}

export default Comment