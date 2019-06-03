import React, { Component } from 'react'
import Warning from '../shared/Warning'

class PhrasesScreen extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle}</h1>
        <Warning />
      </div>
    )
  }
}

export default PhrasesScreen