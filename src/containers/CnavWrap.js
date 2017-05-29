import React, {Component} from 'react'
import { connect } from 'react-redux'
import Cnav from '../components/Cnav/index'

class CnavWrap extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
    return (
      <Cnav />
    )
  }
}

function mapStateToProps(state) {
  return {
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
