import React, { Component } from 'react'
import './css/index.css'

class Comment extends Component {
  constructor(content,props){
    super(content, props)
    this.state = {
      txt: ''
    }
  }
  handleClick(){
    this.props.handleClick(this.state.txt, this.props.topic_id, this.props.reply_id)

    this.props.changeInputId('')
    this.setState({
      txt: ''
    })
  }
  render() {
    let { style, reply_id, replyName } = this.props
    reply_id = reply_id ? reply_id : ''
    return (
      <div className="comment-textarea" style={style}>
        <form>
          <textarea className="form-control" rows="3" onChange={e => this.setState({txt: e.target.value})} defaultValue={reply_id ? `@${replyName} ` : ''}></textarea>
          <button type="button" className="btn btn-success" onClick={this.handleClick.bind(this)}>提交</button>
        </form>
      </div>
    )
  }
}

export default Comment