import React, {Component} from 'react'
import { connect } from 'react-redux'
import Content from '../components/Topic/Content'
import CommentCount from '../components/Topic/CommentCount'
import CommentList from '../components/Topic/CommentList'
import Comment from '../components/Topic/Comment'
import { getTopic_async, setUp_async } from '../actions'

class Topic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      test: false
    }
  }
  componentWillReceiveProps(){
    this.setState({
      test:true
    })
  }
  componentDidMount(){
    // 获取数据
    this.props.getTopic(this.props.match.params.id)
  }
  render() {
    let { data, reply_count, replies, id, setUp } = this.props
    return (
      <div className="app-wrap">
        <Content data={data}/>
        <CommentCount reply_count={reply_count}/>
        { replies.map((v, i) => {
          return v && <CommentList replies={v} key={i} id={id} setUp={setUp}/>
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
    data: state.topic || [],
    reply_count: state.topic.reply_count || 0,
    replies: state.topic.replies || [],
    id: state.author.id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTopic: (id) => {
      dispatch(getTopic_async(id))
    },
    setUp: (replies ,id) => {
      dispatch(setUp_async(replies, id))
    }
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topic)
