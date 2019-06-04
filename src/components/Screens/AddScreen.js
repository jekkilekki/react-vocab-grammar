import React, { Component } from 'react'
import { connect } from 'react-redux'
import HangulForm from '../Hangul/HangulForm'
import VocabForm from '../Vocab/VocabForm'
import GrammarForm from '../Grammar/GrammarForm'
import PhrasesForm from '../Phrases/PhrasesForm'
import Warning from '../shared/Warning'

class GenericScreen extends Component {
  renderForm() {
    switch ( this.props.pageTitle.toLowerCase() ) {
      case 'hangul': return <HangulForm />
      case 'vocabulary': return <VocabForm />
      case 'grammar': return <GrammarForm />
      case 'phrases': return <PhrasesForm />
      default: return null
    }
  }

  render() {
    const { loggedIn } = this.props

    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle}</h1>
        { !loggedIn && <Warning /> }
        { loggedIn && this.renderForm() }
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return {
    loggedIn: app.loggedIn
  }
}

export default connect(mapStateToProps)(GenericScreen)