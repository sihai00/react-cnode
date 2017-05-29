import { call, select, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { objToParam } from '../tool'
import { getTopics } from '../actions'

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
// 获取topics数据
export function* getTopicsAsync() {
  // 获取请求参数
  let param = yield select(state => state.topics)

  // 异步获取数据
  let data = yield call(getApiData, url + '/topics?' + objToParam(param))
  
  // 添加到store
  yield put(getTopics(data))
  // yield put({type: 'GETTOPICS', data: 1})
}

export default function* rootSaga() {
  yield takeEvery('GETTOPICS_ASYNC', getTopicsAsync)
}