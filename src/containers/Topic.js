import React, {Component} from 'react'
import { connect } from 'react-redux'
import Content from '../components/Topic/Content'
import CommentCount from '../components/Topic/CommentCount'
import CommentList from '../components/Topic/CommentList'
import Comment from '../components/Topic/Comment'
import { getTopic_async } from '../actions'

class Topic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }
  componentDidMount(){
    // 获取数据
    this.props.getTopic(this.props.match.params.id)
  }
  render() {
    let { data, reply_count, replies } = this.props
    return (
      <div className="app-wrap">
        { data && <Content data={data}/>}
        { reply_count && <CommentCount reply_count={reply_count}/> }
        { replies &&  replies.map((v, i) => {
          return v && <CommentList replies={v} key={i}/>
        })}
        <section style={{padding: '0 1rem'}}>
          <Comment></Comment>
        </section>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.topic,
    reply_count: state.topic.reply_count,
    replies: state.topic.replies
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTopic: (id) => {
      dispatch(getTopic_async(id))
    }
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic)
