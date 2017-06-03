const topic = (state = '', action) => {
  let { payload } = action
  switch (action.type) {
    // 切换导航
    case 'GETTOPIC':
      return payload
    case 'SETUP':
      console.log('SETUP')
      payload.ups.push(action.myId)

      // state.replies.forEach(v => {
      //   if (v.id === payload.id) {
      //     v.ups.push(action.myId)
      //   }
      // })

      return {
        ...state
      }
    case 'SETDOWN':
      console.log('SETDOWN')
      payload.ups.splice(payload.ups.indexOf(action.myId), 1)

      // state.replies.forEach(v => {
      //   if (v.id === payload.id) {
      //     v.ups.splice(payload.ups.indexOf(action.myId), 1)
      //   }
      // })
      return {
        ...state
      }
    default:
      return state
  }
}

export default topic