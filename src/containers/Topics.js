import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTab, getTopics_async } from '../actions'

import Slide from '../components/Topics/Slide'
import TopicsList from '../components/Topics/TopicsList'

class Topics extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }
  componentDidMount(){
    // 获取数据
    this.props.getTopics()
  }
  render() {
    return (
      <div className="app-wrap">
        <Slide changeTab={this.props.changeTab} tab={this.props.tab}/>
        <TopicsList data={this.props.data}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tab: state.topics.tab,
    data: state.topics.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (tab) => {
      dispatch(changeTab(tab))
      dispatch(getTopics_async())
    },
    getTopics: () => {
      dispatch(getTopics_async())
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics)
