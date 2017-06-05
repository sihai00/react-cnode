# react-cnode
又一次拿cnode社区开刀，为上手react全家桶所构建的移动端cnode社区（react + react-redux react-router react-saga axios react-app-create）

## 功能
- 登陆
- 文章列表
- 文章详情
- 点赞
- 评论
- 用户详情
- 下拉加载

## 开始
```js
// 加载所需依赖
npm install

// 运行
npm start
```
## react生命周期与redux数据流动图例（摘取Scott）
react生命周期
![react生命周期](https://github.com/sihai00/react-cnode/blob/master/b.png)

redux数据流动
![redux数据流动](https://github.com/sihai00/react-cnode/blob/master/a.png)

## 目录结构
由于是用react-app-create结合react-router-redux工具快读构建的，整体目录结构大致相同，以下为src目录结构
```
- actions： action目录（所以行为）
- components： ui组件目录（只负责ui组件的渲染）
  - Topics：文章列表页（ui层）
    - Slide
    - TopicList
- containers： 逻辑组件目录（负责业务逻辑处理和数据的分发）
  - Topics.js： 文章列表页（逻辑层）
- reducers： 接收action行为对store做出相应的处理（负责数据的处理）
- routers：路由
  - css：全局css
  - index.js：路由
- sagas：异步请求（redux中间件）
- tool： 项目所需公共工具类
```
一个页面的逻辑层就对应一个ui层页面，一个ui层页面包含子ui组件。可以想象成一个鸡蛋中鸡蛋壳（逻辑层redux）包含蛋黄和蛋白（ui层）

## actions：对store改变的行为
```js
// 项目中一般为一个函数，可复用
export function getTopics(data) {
  return {
    type: 'GETTOPICS',
    payload: data
  }
}

// 也可以是对象字面量形式
dispatch({
  type: 'GETTOPICS',
  payload: data
})

```

## reducers：处理store状态
containers目录下，负责业务逻辑处理和数据的分发

```js
let initState = {
  param: {
    limit: 10,
    page: 1,
    tab: 'all'
  },
  data: []
}

const topics = (state = initState, action) => {
  switch (action.type) {
    case 'GETTOPICS':
      return {
        ...state,
        data: payload
      }
    default:
      return state
  }
}

export default topics
```

## sagas：redux异步请求中间件
```js
import { call, select, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { objToParam } from '../tool'
import { getTopics } from '../actions'

const url = 'https://cnodejs.org/api/v1'

// 请求数据
function getApiData(url){
  return axios.get(url)
  .then(function (response) {
    if (response.status === 200) {
      return response.data.data
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}

// 获取topics数据
export function* getTopicsAsync() {
  // 获取请求参数
  let topics = yield select(state => state.topics)

  // 获取上一页数据
  let preData = topics.data ? topics.data : []

  // 异步获取数据
  let data = yield call(getApiData, url + '/topics?' + objToParam(topics.param))
  
  // 添加到store
  yield put(getTopics(preData.concat(data)))
}

export default function* rootSaga() {
  yield takeEvery('GETTOPICS_ASYNC', getTopicsAsync)
}
```
redux-saga的用法跟其实跟es6的genarator是一样的。如上，```yield takeEvery('GETTOPICS_ASYNC', getTopicsAsync)```在ui层dispatch一个action，只要匹配GETTOPICS_ASYNC，saga就会捕获到，然后执行getTopicsAsync函数

## containers：逻辑层（鸡蛋壳）
```jsx
import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getTopics } from '../actions/index'

class Topics extends Component {
  componentDidMount(){
    this.props.getTopics()
  }
  render() {
    return (
      <div>
        <Slide />
        <TopicsList data={data}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getTopics: () => {
      dispatch(getTopics())
    } 
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics)
```
mapStateToProps和mapDispatchToProps都是react-redux提供的方法
- mapStateToProps：获取全局state，传递状态数据
- mapDispatchToProps： 传递修改state的方法

## 小坑
写下拉刷新的时候，需要全局绑定scroll，但必须在componentWillUnmount解绑，并且addEventListener和removeEventListene的回调函数需一致，在constructor里调用bind函数即可
```js
import React, { Component } from 'react'

class GetMore extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
    this.scrollFn = this.scrollFn.bind(this)
  }
  scrollFn(e){
    ...
  }
  componentDidMount(){
    document.addEventListener('scroll', this.scrollFn, false)
  }
  componentWillUnmount(){
    document.removeEventListener('scroll', this.scrollFn, false)
  }
  render() {
    return (
      <div >...</div>
    )
  }
}

export default GetMore
```
