import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle || '404 Not Found'}</h1>
      </div>
    )
  }
}

export default NotFound