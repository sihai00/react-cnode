import React, {Component} from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/index'

// componentWillMount
// render
// componentDidMount

// componentWillReceiveProps
// shouldComponentUpdate

// componentWillUpdate
// componentDidUpdate

// componentWillUnmount
class Topics extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
    console.log(this.props)
    return (
      <p>
        Clicked: <span id="value">{this.props.counter}</span> times
        <button onClick={() => this.props.add(2)}>+</button>
        <button >-</button>
        <button >Increment if odd</button>
        <button >Increment async</button>
      </p>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (num) => {
      dispatch(add(num))
    }
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Topics)
