let initState = {
  avatar_url: localStorage.avatar_url ? localStorage.avatar_url : '',
  loginname: localStorage.loginname ? localStorage.loginname : '',
  id: localStorage.id ? localStorage.id : '',
  accesstoken: localStorage.accesstoken ? localStorage.accesstoken : '',
  create_at: '',
  githubUsername: '',
  recent_replies: [],
  recent_topics: [],
  score: 0
}

const author = (state = initState, action) => {
  let { payload } = action
  switch (action.type) {
    // 获取accesstoken
    case 'GETACCESSTOKEN':
      return {
        ...state,
        accesstoken: payload
      }
    // 获取用户信息
    case 'GETLOGININFO':
      return {
        ...state,
        avatar_url: action.userInfo.avatar_url,
        loginname: action.userInfo.loginname,
        id: action.userInfo.id,
      }
    case 'GETUSERINFO':
      return {
        ...state,
        create_at: action.payload.create_at,
        githubUsername: action.payload.githubUsername,
        recent_replies: action.payload.recent_replies,
        recent_topics: action.payload.recent_topics,
        score: action.payload.score,
      }
    default:
      return state
  }
}

export default author