import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.svg'
import user from './img/timg.jpeg'
import './css/index.css'

class Cnav extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }
  render() {
    return (
      <nav className="cnav">
        <span><img src={logo} alt="logo" /><Link to="/">Cnode</Link></span>
        <span>
          <Link to="/about"><img src={user} alt="user"/></Link>
        </span>
      </nav>
    )
  }
}

export default Cnav