import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { formFieldUpdate } from '../../stateManagement/actions'

import PreviewList from './PreviewList'
import CardFront from './CardBack'
import CardBack from './CardFront'

const Panel = styled.div`
  background: rgba(169,186,201,0.5);
  padding: 1rem;
  width: 50%;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const Image = styled.img`
  max-width: 90%;
  margin: 0 auto;
`

const Card = styled.div`
  background: white;
  box-shadow: 1px 2px 10px rgba(0,0,0,0.3);
  padding: 10px;
  margin: 0 auto;
  width: 95%;
  max-width: 200px;
  height: 140px;
`

const PreviewTitle = styled.p`
  text-align: center;
  margin: 5% 5% 0;
`

class PreviewPanel extends Component {
  render() {
    const { formName, app } = this.props

    if ( app[formName] === undefined ) return null

    return (
      <Panel className='preview-panel'>
        <CardContainer>
          
          <div>
            <PreviewTitle>New Card Front</PreviewTitle>
            <CardFront formName={formName} card={app[formName]} noTitle />
          </div>
        
          <div>
            <PreviewTitle>New Card Back</PreviewTitle>
            <CardBack formName={formName} card={app[formName]} />
          </div>
        </CardContainer>

        {app[formName].cards && app[formName].cards.length > 0 &&
          <PreviewList formName={formName} cards={app[formName].cards} />
        }
      </Panel>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { formFieldUpdate })(PreviewPanel)