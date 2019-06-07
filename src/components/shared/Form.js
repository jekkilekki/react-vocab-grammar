import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { formFieldUpdate, formSave } from '../../stateManagement/actions'
import { connect } from 'react-redux'

import FormAddFields from './FormAddFields'
import FormAddImage from './FormAddImage'
import FormCheckBoxes from './FormCheckBoxes'
import FormRadioBtns from './FormRadioBtns'
import FormDropdown from './FormDropdown'
import { generateID, levelsVocab, levelsGrammar } from '../../utils/helpers'

const FormContainer = styled.form`
  width: 45%;
  margin-right: 5%;
  position: relative;
`

const Error = styled.p`
  color: red;
  text-align: left;
`

class Form extends Component {
  state = {
    loading: false,
    error: '',
  }

  loadCard = (card) => {

  }

  formSubmit = (e) => {
    e.preventDefault()

    const { formSave, app, formName, formFieldUpdate } = this.props
    const id = generateID()

    // Clone the Form object held in Redux state so we can manipulate it a bit
    let card = Object.assign({}, app[formName])
    delete card.cards
    card.id = id

    if ((card.korean !== '' && card.korean !== undefined) || 
        (card.english !== '' && card.english !== undefined)) {
      formSave({ 
        formId: formName, 
        card
      })
      formFieldUpdate({ formId: formName, prop: 'sentences', value: [] })
      formFieldUpdate({ formId: formName, prop: 'definitions', value: [] })
    } else {
      this.setState({ error: 'Saving a card requires Korean or English text.' })
    }
  }

  render() {
    const {
      formName, levels, addImage, withPronunciation, radioBtns, checkBoxes, memorizationHint, app
    } = this.props

    console.log(this.props)

    return (
      <FormContainer id={formName} onSubmit={this.formSubmit}>
        {this.state.error !== '' && <Error>{this.state.error}</Error>}

        {levels && 
          levels === 'vocab' && 
            <FormDropdown data={levelsVocab} 
              value={app[formName].level || ''}
              onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'level', value: e.target.value }) }
            />
        }
        {levels && 
          levels === 'grammar' && 
            <FormDropdown data={levelsGrammar} 
              value={app[formName].level || ''}
              onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'level', value: e.target.value }) }
            />
        }

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
            onChange={(item) => this.props.formFieldUpdate({ formId: formName, prop: 'radioSelected', value: item }) }
          />
        }
        {checkBoxes &&
          <FormCheckBoxes 
            id="checkBoxes"
            data={checkBoxes}
            checked={app[formName].checkboxesChecked || []}
            onChange={(list) => this.props.formFieldUpdate({ formId: formName, prop: 'checkboxesChecked', value: list }) }
          />
        }
        
        <label htmlFor="definition" className="float-label">Definition</label>
        <FormAddFields title="definition(s)" definitions={app[formName].definitions || []} 
          onChange={(group) => this.props.formFieldUpdate({ formId: formName, prop: 'definitions', value: group }) }
        />

        <label htmlFor="sentence" className="float-label">Example Sentence</label>
        <FormAddFields title="sentence(s)" sentences={app[formName].sentences || []} 
          onChange={(group) => this.props.formFieldUpdate({ formId: formName, prop: 'sentences', value: group }) }
        />

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

        <input className="btn-big" type="submit" 
          value={`Add ${formName}`} 
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { formFieldUpdate, formSave })(Form)