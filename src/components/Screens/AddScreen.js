import React, { Component } from 'react'
import { connect } from 'react-redux'
import Form from '../shared/Form'
import Warning from '../shared/Warning'
import PreviewPanel from '../shared/PreviewPanel'

import styled from 'styled-components'
import { vocabPartsOfSpeech, grammarPartsOfSpeech } from '../../utils/helpers'

const Container = styled.div`
  display: flex;
`

class GenericScreen extends Component {
  renderForm() {
    switch ( this.props.pageTitle.toLowerCase() ) {
      case 'hangul': return <Form formName={this.props.pageTitle} addImage />
      case 'vocabulary': return <Form formName={this.props.pageTitle} addImage radioBtns={vocabPartsOfSpeech}/>
      case 'grammar': return <Form formName={this.props.pageTitle} addImage checkBoxes={grammarPartsOfSpeech} />
      case 'phrases': return <Form formName={this.props.pageTitle} addImage />
      default: return null
    }
  }

  render() {
    const { loggedIn } = this.props

    return (
      <div className="container">
        <h1 className="page-title">{this.props.pageTitle}</h1>
        { !loggedIn && <Warning /> }
        { loggedIn && 
          <Container className='add-item-container'>  
            {this.renderForm()}
            <PreviewPanel formName={this.props.pageTitle} />
          </Container>
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

export default connect(mapStateToProps)(GenericScreen)