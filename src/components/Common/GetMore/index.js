import React, { Component } from 'react'

class GetMore extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clearTime: '',
      screenHeight: window.screen.height,
    }
    this.scrollFn = this.scrollFn.bind(this)
  }
  scrollFn(e){
    let clearTimeId = ''
    // 限制除调用GetMore组件以外的其他场景
    if (!this.props.loaded) {
      return 
    }
    // 节流
    if(this.state.clearTime){
      clearTimeout(this.state.clearTime)
    }

    clearTimeId = setTimeout(() => {
      let top = this.refs.wrapper.getBoundingClientRect().top
      if(top < this.state.screenHeight){
        this.props.triggerFun()
      }
    }, 100)

    this.setState({
      clearTime: clearTimeId
    })
  }
  componentDidMount(){
    document.addEventListener('scroll', this.scrollFn, false)
  }
  componentWillUnmount(){
    document.removeEventListener('scroll', this.scrollFn, false)
  }
  render() {
    return (
      <div ref="wrapper" style={{textAlign: 'center'}}>
        {
          this.props.loaded
          ? <p onClick={this.props.triggerFun}>加载更多</p>
          : <p>加载中。。。</p>
        }
      </div>
    )
  }
}

export default GetMore