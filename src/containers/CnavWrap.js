import React, {Component} from 'react'
import { connect } from 'react-redux'
import Cnav from '../components/Cnav'

class CnavWrap extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
    return (
      <Cnav avatar_url={this.props.avatar_url}/>
    )
  }
}

function mapStateToProps(state) {
  return {
    avatar_url: state.author.avatar_url
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CnavWrap)
