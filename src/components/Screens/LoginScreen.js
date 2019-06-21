import React, { Component } from 'react'

class LoginScreen extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle}</h1>
      </div>
    )
  }
}

export default LoginScreen