import React, { Component } from 'react'
import './css/index.css'
import Comment from '../Comment'

class CommentList extends Component {
  render() {
    let { 
      replies, 
      id, 
      setUp, 
      inputId, 
      topic_id, 
      handleClick,
      changeInputId 
    } = this.props

    return (
      <section className="comment">
        <ul>
          <li className="comment-item">
            <div className="content">
              <img src={replies.author && replies.author.avatar_url} alt="logo"/>
              <div className="info">
                <div className="info-item">
                  <span>{replies.author && replies.author.loginname}</span>
                  <span 
                    className={`label label-default ${replies.ups.indexOf(id) > -1 ? 'label-success' : ''}`}
                    onClick={() => setUp(replies, id)}
                  >{replies.ups.length}赞</span>
                </div>
                <div className="info-item">
                  <time>发布于：{replies.create_at.split('T')[0]}</time>
                  <span className="label label-warning" onClick={() => changeInputId(replies.id)}>回复</span>
                </div>
              </div>
            </div>
            <div className="coment-content" dangerouslySetInnerHTML={{__html:replies.content}}></div>
            <Comment 
              style={inputId === replies.id ? {color: 'block'} : {display: 'none'}} 
              handleClick={handleClick} 
              reply_id={replies.id}
              topic_id={topic_id}
              replyName={replies.author && replies.author.loginname}
              changeInputId={changeInputId}
            />
          </li>
        </ul>
      </section>
    )
  }
}

export default CommentList