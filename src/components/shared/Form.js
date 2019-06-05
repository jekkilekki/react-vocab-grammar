import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { formFieldUpdate } from '../../stateManagement/actions'
import { connect } from 'react-redux'

import FormAddFields from './FormAddFields'
import FormAddImage from './FormAddImage'
import FormCheckBoxes from './FormCheckBoxes'
import FormRadioBtns from './FormRadioBtns'

const FormContainer = styled.form`
  width: 45%;
  margin-right: 5%;
  position: relative;
`

class Form extends Component {
  state = {
    loading: false,
    error: '',
  }

  shouldComponentUpdate(nextProps) {
    return ( this.props.app[this.props.formName] !== nextProps.app[nextProps.formName] )
  }

  render() {
    const {
      formName, addImage, withPronunciation, radioBtns, checkBoxes, memorizationHint, app
    } = this.props

    return (
      <FormContainer id={formName}>
        {addImage && 
          <FormAddImage
            value={app[formName].imageUrl || ''} 
            placeholder="Image URL" 
            onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'imageUrl', value: e.target.value }) }
          />
        }

        <label htmlFor="korean" className="float-label">Korean</label>
        <input type="text" id={`${formName}-korean`} className="input" 
          value={app[formName].korean || ''} 
          placeholder="Korean" 
          onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'korean', value: e.target.value }) }
        />
        
        <label htmlFor="english" className="float-label">English</label>
        <input type="text" id="english" className="input" 
          value={app[formName].english || ''} 
          placeholder="English" 
          onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'english', value: e.target.value }) }
        />

        {withPronunciation &&
          <Fragment>
            <label htmlFor="pronunciation" className="float-label">Pronunciation (optional)</label>
            <input type="text" id="pronunciation" className="input" 
              value={app[formName].pronunciation || ''} 
              placeholder="Pronunciation (optional)" 
              onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'pronunciation', value: e.target.value }) }
            />
          </Fragment> 
        }
        
        {radioBtns && 
          <FormRadioBtns 
            id="radioBtns"
            data={radioBtns}
            selected={app[formName].radioSelected || null}
            onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'radioSelected', value: e.target.value }) }
          />
        }
        {checkBoxes &&
          <FormCheckBoxes 
            id="checkBoxes"
            data={checkBoxes}
            checked={app[formName].checkboxesChecked || []}
            onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'checkboxesChecked', value: e.target.value }) }
          />
        }
        
        <label htmlFor="definition" className="float-label">Definition</label>
        <FormAddFields title="definition(s)" definitions={app[formName].definitions || []} />

        <label htmlFor="sentence" className="float-label">Example Sentence</label>
        <FormAddFields title="sentence(s)" sentences={app[formName].sentences || []} />

        {memorizationHint &&
          <Fragment>
            <label htmlFor="mem-hint" className="float-label">Memorization hint (optional)</label>
            <input type="text" id="mem-hint" className="input" 
              value={app[formName].memHint || ''} 
              placeholder="Memorization hint (optional)" 
              onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'memHint', value: e.target.value }) }
            />
          </Fragment>
        }

        <input className="btn-big" type="submit" value={`Add ${formName}`} />
      </FormContainer>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { formFieldUpdate })(Form)