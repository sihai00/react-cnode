const topic = (state = '', action) => {
  let { payload } = action
  switch (action.type) {
    // 切换导航
    case 'GETTOPIC':
      return payload
    default:
      return state
  }
}

export default topic