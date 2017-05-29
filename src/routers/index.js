import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
// import Home from '../components/Home'
// import About from '../components/About'
// import Topics from '../components/Topics'
import Cnav from '../components/Cnav'
import Topics from '../containers/Topics'
import Topic from '../containers/Topic'
// 全局css
import './css/index.css'

const routers = (
  <div>
    <Cnav />
    <Switch>
      <Route exact path="/" component={Topics}/>
      <Route path="/topic/:id" component={Topic}/>
      <Redirect from='' to="/" />
    </Switch>
  </div>
)

export default routers