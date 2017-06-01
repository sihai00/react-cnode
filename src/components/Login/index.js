import React, { Component } from 'react'
import './css/index.css'

class Login extends Component {
  render() {
    let { handleChange, handleSubmit } = this.props
    return (
      <div className="app-wrap">
        <section className="login">
          <form>
              <div className="form-group">
                <label>登录accessToken:</label>
                <input type="text" className="form-control" onChange={handleChange}/>
              </div>
              <button type="button" className="btn btn-success" onClick={handleSubmit}>提交</button>
          </form>
        </section>
      </div>
    )
  }
}

export default Login