import React, { Component } from 'react'
import VocabForm from './VocabForm'
import Warning from '../shared/Warning'

class VocabScreen extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle}</h1>
        <Warning />
        {/* <VocabForm /> */}
      </div>
    )
  }
}

export default VocabScreen