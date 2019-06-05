import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import PreviewList from './PreviewList'

const Panel = styled.div`
  background: rgba(169,186,201,0.5);
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50%;
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

    return (
      <Panel className='preview-panel'>
        {app[formName].imageUrl && 
          <div>
            <PreviewTitle>Card Front</PreviewTitle>
            <Card>
              <Image className='preview-image' alt='Preview' src={app[formName].imageUrl} />
            </Card>
          </div>
        }
        {(app[formName].korean || app[formName].english) &&
          <div>
            <PreviewTitle>Card Back</PreviewTitle>
            <Card>
              {app[formName].korean && <h2 className='preview-korean'>{app[formName].korean}</h2>}
              {app[formName].english && <p className='preview-english'>{app[formName].english}</p>}
            </Card>
          </div>
        }
        {app[formName].cards &&
          <PreviewList cards={app[formName].cards} />
        }
      </Panel>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps)(PreviewPanel)