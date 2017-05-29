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