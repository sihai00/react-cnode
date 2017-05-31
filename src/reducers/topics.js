let initState = {
  param: {
    limit: 10,
    page: 1,
    tab: 'all'
  },
  data: []
}

const topics = (state = initState, action) => {
  let { payload } = action
  switch (action.type) {
    // 切换导航
    case 'CHANGETAB':
      state.param.tab = payload
      return state
    // 获取topics数据
    case 'GETTOPICS':
      return {
        ...state,
        data: payload
      }
    // 删除topics数据
    case 'REMOVETOPICS':
      return {
        ...state,
        data: []
      }
    // 获取下一页
    case 'GETMORETOPICS':
      state.param.page = payload
      return state
    // 获取topics请求参数
    case 'GETPRAMA':
      return state.param
    default:
      return state
  }
}

export default topics