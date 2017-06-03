export function add(num) {
  return {
    type: 'INCREMENT',
    num
  }
}
// 改变侧栏
export function changeTab(tab) {
  return {
    type: 'CHANGETAB',
    payload: tab
  }
}
// 获取文章列表
export function getTopics(data) {
  return {
    type: 'GETTOPICS',
    payload: data
  }
}
export function removeTopics() {
  return {
    type: 'REMOVETOPICS'
  }
}
// 异步获取文章列表
export function getTopics_async() {
  return {
    type: 'GETTOPICS_ASYNC',
  }
}
// 获取下一页文章列表
export function getMoreTopics(page) {
  return {
    type: 'GETMORETOPICS',
    payload: page
  }
}
// 获取文章
export function getTopic(data) {
  return {
    type: 'GETTOPIC',
    payload: data
  }
}
// 异步获取文章
export function getTopic_async(id) {
  return {
    type: 'GETTOPIC_ASYNC',
    payload: id
  }
}
// 登陆
export function login_async(accesstoken) {
  return {
    type: 'LOGIN_ASYNC',
    payload: accesstoken
  }
}
// 获取登陆信息
export function getLoginInfo(userInfo) {
  return {
    type: 'GETLOGININFO',
    userInfo
  }
}
// 获取accesstoken
export function getAccessToken(accesstoken) {
  return {
    type: 'GETACCESSTOKEN',
    payload: accesstoken
  }
}
// 异步获取用户信息
export function getUserInfo_async() {
  return {
    type: 'GETUSERINFO_ASYNC'
  }
}
// 获取用户信息
export function getUserInfo(data) {
  return {
    type: 'GETUSERINFO',
    payload: data
  }
}
// 点赞,异步
export function setUp_async(replies, myId) {
  return {
    type: 'SETUP_ASYNC',
    payload: replies,
    myId: myId
  }
}
// 点赞，更新store
export function setUp(replies, myId) {
  return {
    type: 'SETUP',
    payload: replies,
    myId: myId
  }
}
// 取消赞
export function setDown(replies, myId) {
  return {
    type: 'SETDOWN',
    payload: replies,
    myId: myId
  }
}