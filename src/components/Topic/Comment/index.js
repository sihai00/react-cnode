import React, { Component } from 'react'
import './css/index.css'

class About extends Component {
  render() {
    return (
      <div className="comment-textarea">
        <form>
          <textarea className="form-control" rows="3"></textarea>
          <button type="button" className="btn btn-success">提交</button>
        </form>
      </div>
    )
  }
}

export default About