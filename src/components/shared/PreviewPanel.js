import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { formFieldUpdate, sampleDataOverwrite, sampleDataAppend, sampleDataDelete } from '../../stateManagement/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PreviewList from './PreviewList'
import CardFront from './CardBack'
import CardBack from './CardFront'

const Panel = styled.div`
  background: rgba(169,186,201,0.5);
  padding: 1rem 1rem 1rem;
  width: 50%;
`

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`

const DataButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: 0.5;
`

const LoadButton = styled.small`
  margin-left: 5px;
  width: 15px;
  text-align: center;
  opacity: 0.5;
  cursor: pointer;
`

// const Image = styled.img`
//   max-width: 90%;
//   margin: 0 auto;
// `

// const Card = styled.div`
//   background: white;
//   box-shadow: 1px 2px 10px rgba(0,0,0,0.3);
//   padding: 10px;
//   margin: 0 auto;
//   width: 95%;
//   max-width: 200px;
//   height: 140px;
// `

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
        <DataButtons>
          <small>Sample Data: </small>
          <LoadButton onClick={() => this.props.sampleDataOverwrite(formName)}>
            <FontAwesomeIcon icon='history' />
            {/* Overwrite */}
          </LoadButton>
          <LoadButton onClick={() => this.props.sampleDataAppend(formName)}>
            <FontAwesomeIcon icon='plus' />
            {/* Append */}
          </LoadButton>
          <LoadButton onClick={() => this.props.sampleDataDelete(formName)}>
            <FontAwesomeIcon icon='trash-alt' />
            {/* Delete */}
          </LoadButton>
        </DataButtons>

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

export default connect(mapStateToProps, { formFieldUpdate, sampleDataOverwrite, sampleDataAppend, sampleDataDelete })(PreviewPanel)