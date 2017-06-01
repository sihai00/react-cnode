import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
// import Home from '../components/Home'
// import About from '../components/About'
// import Topics from '../components/Topics'
import CnavWrap from '../containers/CnavWrap'
import Topics from '../containers/Topics'
import Topic from '../containers/Topic'
import Login from '../containers/Login'
import Author from '../containers/Author'
// 全局css
import './css/index.css'

const routers = (
  <div>
    <CnavWrap />
    <Switch>
      <Route exact path="/" component={Topics}/>
      <Route path="/login" component={Login}/>
      <Route path="/topic/:id" component={Topic}/>
      <Route path="/author" component={Author}/>
      <Redirect from='' to="/" />
    </Switch>
  </div>
)

export default routers