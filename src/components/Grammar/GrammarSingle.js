import React, { Component } from 'react'

class GrammarSingle extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle || 'Grammar'}</h1>
      </div>
    )
  }
}

export default GrammarSingle