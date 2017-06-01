import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logo.svg'
import user from './img/timg.jpeg'
import './css/index.css'

class Cnav extends Component {
  render() {
    return (
      <nav className="cnav">
        <span><img src={logo} alt="logo" /><Link to="/">Cnode</Link></span>
        <span>
          <Link to={this.props.avatar_url ? '/author' : '/login'}>
            <img src={this.props.avatar_url ? this.props.avatar_url : user} alt="user"/>
          </Link>
        </span>
      </nav>
    )
  }
}

export default Cnav