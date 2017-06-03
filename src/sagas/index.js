import { call, select, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { objToParam } from '../tool'
import { 
  getTopics, 
  getTopic, 
  getLoginInfo, 
  getAccessToken, 
  getUserInfo, 
  setUp, 
  setDown
} from '../actions'

const url = 'https://cnodejs.org/api/v1'
// 封装GET方法
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

// 封装POST方法
function postApiData(url, param){
  return axios.post(url, param)
  .then(function (response) {
    if (response.status === 200) {
      return response.data
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

// 获取topic数据
export function* getTopicAsync(action) {
  // 异步获取数据
  let data = yield call(getApiData, url + '/topic/' + action.payload)

  // 添加到store
  yield put(getTopic(data))
}

// 登陆
export function* getLoginAsync(action) {
  // 获取accessToken
  let accesstoken = action.payload
  
  localStorage.accesstoken = accesstoken
  yield put(getAccessToken(accesstoken))

  // 异步获取数据
  let data = yield call(postApiData, url + '/accesstoken', {accesstoken})

  localStorage.avatar_url = data.avatar_url
  localStorage.id = data.id
  localStorage.loginname = data.loginname
  // 添加到store
  yield put(getLoginInfo(data))
}

// 获取用户信息
export function* getUserInfo_async() {
  // 获取请求参数
  let userName = yield select(state => state.author.loginname)
  userName = userName ? userName : ''

  // 异步获取数据
  let data = yield call(getApiData, url + '/user/' + userName)
  
  // 添加到store
  yield put(getUserInfo(data))
}

// 点赞
export function* setUp_async(action) {
  // 获取请求参数
  let replies = action.payload
  let reply_id = replies.id
  let accesstoken = yield select(state => state.author.accesstoken)

  // 异步获取数据
  let obj = yield call(postApiData, `${url}/reply/${reply_id}/ups`, {accesstoken})

  // 添加到store
  if (obj.action === 'down') {
    yield put(setDown(replies, action.myId))
  }else{
    yield put(setUp(replies, action.myId))
  }
}

export default function* rootSaga() {
  yield takeEvery('GETTOPICS_ASYNC', getTopicsAsync)
  yield takeEvery('GETTOPIC_ASYNC', getTopicAsync)
  yield takeEvery('LOGIN_ASYNC', getLoginAsync)
  yield takeEvery('GETUSERINFO_ASYNC', getUserInfo_async)
  yield takeEvery('SETUP_ASYNC', setUp_async)
}