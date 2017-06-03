const ups = (state = [], action) => {
  let { payload } = action
  switch (action.type) {
    case 'SETTINGUP':
      return payload
    case 'SETUP':
      console.log('SETUP')
      state.push(payload)
      console.log(state)
      return state
    case 'SETDOWN':
      console.log('SETDOWN')
      state.splice(state.indexOf(payload), 1)
      console.log(state)
      return state
    default:
      return state
  }
}

export default ups