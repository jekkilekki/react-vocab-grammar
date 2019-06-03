import React, { Component } from 'react'

class PhraseSingle extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle || 'Phrase'}</h1>
      </div>
    )
  }
}

export default PhraseSingle