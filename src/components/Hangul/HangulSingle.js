import React, { Component } from 'react'

class HangulSingle extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle || 'Hangul'}</h1>
      </div>
    )
  }
}

export default HangulSingle