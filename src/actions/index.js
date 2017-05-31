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
    id
  }
}