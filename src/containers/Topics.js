import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeTab, getTopics_async, getMoreTopics, removeTopics } from '../actions'

import Slide from '../components/Topics/Slide'
import TopicsList from '../components/Topics/TopicsList'
import GetMore from '../components/Common/GetMore'

class Topics extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      loaded: true
    }
  }
  componentWillReceiveProps(){
    this.setState({
      loaded: true
    })
  }
  componentDidMount(){
    // 获取数据
    this.props.getTopics()
  }
  getMore(){
    this.setState({
      loaded: false
    })

    this.props.getMoreTopics(this.props.page + 1)
    this.props.getTopics()
  }
  render() {
    return (
      <div className="app-wrap">
        {this.props.tab && <Slide changeTab={this.props.changeTab} tab={this.props.tab}/>}
        {
          this.props.data.length 
          ? <TopicsList data={this.props.data}/>
          : <p style={{textAlign: 'center'}}>加载中。。。</p>
        }
        {
          this.props.data.length
          ? <GetMore triggerFun={this.getMore.bind(this)} loaded={this.state.loaded}/>
          : ''
        } 
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tab: state.topics.param.tab,
    data: state.topics.data,
    page: state.topics.param.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeTab: (tab) => {
      dispatch(changeTab(tab))
      dispatch(removeTopics())
      dispatch(getTopics_async())
    },
    getTopics: () => {
      dispatch(getTopics_async())
    },
    getMoreTopics: (page) => {
      dispatch(getMoreTopics(page))
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics)
