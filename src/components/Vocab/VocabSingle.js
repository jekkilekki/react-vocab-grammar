import React, { Component } from 'react'

class VocabSingle extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle || 'Vocab'}</h1>
      </div>
    )
  }
}

export default VocabSingle