import React, {Component} from 'react'
import { connect } from 'react-redux'

class Topic extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
    return (
      <p style={{paddingTop: '100px'}}>{this.props.match.params.id}</p>
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
)(Topic)
