import React, { Component } from 'react'
import { connect } from 'react-redux'
import VocabForm from './VocabForm'
import Warning from '../shared/Warning'

class VocabScreen extends Component {
  render() {
    const { loggedIn } = this.props

    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle}</h1>
        {!loggedIn 
          ? <Warning />
          : <VocabForm />
        }
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return {
    loggedIn: app.loggedIn
  }
}

export default connect(mapStateToProps)(VocabScreen)