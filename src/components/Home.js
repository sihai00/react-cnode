import React from 'react'
import { connect } from 'react-redux'
import { add } from '../actions/index'

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
    console.log(this.props)
    return (
      <p style={{paddingTop: '70px'}}>
        Clicked: <span id="value">{this.props.counter}</span> times
        <button onClick={() => this.props.add(2)}>+</button>
        <button >-</button>
        <button >Increment if odd</button>
        <button onClick={this.props.asy}>Increment async</button>
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
    },
    asy: () => {
      dispatch({type: 'INCREMENT_ASYNC'})
    }
  }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
