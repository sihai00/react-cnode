import React, {Component} from 'react'
import { connect } from 'react-redux'
import Info from '../components/Author/Info'
import Replies from '../components/Author/Replies'
import { getUserInfo_async } from '../actions'

class Author extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }
  componentDidMount(){
    this.props.getUserInfo()
  }
  render() {
    return (
      <div className="app-wrap">
        <Info 
          avatar_url={this.props.avatar_url}
          create_at={this.props.create_at}
          loginname={this.props.loginname}
          score={this.props.score}
        />
        <Replies 
          recent_replies={this.props.recent_replies}
          recent_topics={this.props.recent_topics}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    avatar_url: state.author.avatar_url,
    create_at: state.author.create_at,
    loginname: state.author.loginname,
    score: state.author.score,
    recent_replies: state.author.recent_replies,
    recent_topics: state.author.recent_topics
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: () => {
      dispatch(getUserInfo_async())
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Author)
