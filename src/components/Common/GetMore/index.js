import React, { Component } from 'react'

class GetMore extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      clearTime: '',
      screenHeight: window.screen.height,
    }
  }
  // callback(){
  //   let top = this.refs.wrapper.getBoundingClientRect().top
  //   if(top < this.state.screenHeight){
  //     this.props.triggerFun()
  //   }
  // }
  scrollFn(e){
    e.stopImmediatePropagation()
    e.stopPropagation()
    // let clearTime = this.state.clearTime
    // // 限制除调用GetMore组件以外的其他场景
    // if (!this.props.loaded) {
    //   return 
    // }
    // // 节流
    // if(clearTime){
    //   clearTimeout(clearTime)
    // }

    // clearTime = setTimeout(this.callback.bind(this), 50)

    // this.setState({
    //   clearTime: clearTime
    // })
    console.log('test')
  }
  componentDidMount(){
    // 全局监听scroll
    document.addEventListener('scroll', this.scrollFn.bind(this), false)
  }
  componentWillUnmount(){
    console.log(1)
    document.removeEventListener('scroll', this.scrollFn.bind(this), false)
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