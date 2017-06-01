import React, {Component} from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import { login_async } from '../actions'

class LoginWrap extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      accesstoken: ''
    }
  }
  componentWillReceiveProps(nextProps){
    if (nextProps.id) {
      this.props.history.push('/')
    }
  }
  handleChange(e){
    this.setState({
      accesstoken: e.target.value
    })
  }
  handleSubmit(){
    this.props.login(this.state.accesstoken)
  }
  render() {
    return (
      <Login 
        handleChange={this.handleChange.bind(this)}
        handleSubmit={this.handleSubmit.bind(this)}
      />
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.author.id
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (accesstoken) => {
      dispatch(login_async(accesstoken))
    }
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginWrap)
