let initState = {
  limit: 10,
  page: 1,
  tab: 'all'
}

const topics = (state = initState, action) => {
  let { payload } = action
  switch (action.type) {
    // 切换导航
    case 'CHANGETAB':
      return {
        ...state,
        tab: payload
      }
    // 获取topics数据
    case 'GETTOPICS':
      return {
        ...state,
        data: payload
      }
    // 获取topics请求参数
    case 'GETPRAMA':
      return state
    default:
      return state
  }
}

export default topics