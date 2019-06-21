import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { createForm, formError, formFieldUpdate, formSave, formUpdate } from '../../stateManagement/actions'
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
  text-align: left;
`

const Error = styled.p`
  color: red;
  text-align: left;
`

class Form extends Component {
  state = {
    loading: false,
    error: '',
    level: '',
    maintainLevel: false
  }

  loadCard = (card) => {

  }

  setLevel = (e) => {
    this.props.formFieldUpdate({ formId: this.props.formName, prop: 'level', value: e.target.value })
    this.setState({
      level: e.target.value
    })
  }

  formSubmit = (e) => {
    e.preventDefault()

    const { formSave, formUpdate, app, formName, formFieldUpdate, formError } = this.props
    const id = generateID()

    // Clone the Form object held in Redux state so we can manipulate it a bit
    let card = Object.assign({}, app[formName])
    // Delete the cloned array of cards so we don't re-save the cards inside our cards array
    delete card.cards
    card.id = id

    if ( app.editing !== undefined && app.editing !== null ) {
      formUpdate({
        formId: formName,
        cardId: app.editing,
        card
      })
    } else if ((card.korean !== '' && card.korean !== undefined) || 
        (card.english !== '' && card.english !== undefined)) {
      formSave({ 
        formId: formName, 
        card
      })
      formFieldUpdate({ formId: formName, prop: 'sentences', value: [] })
      formFieldUpdate({ formId: formName, prop: 'definitions', value: [] })
    } else {
      formError('Saving a card requires Korean and English text.')
    }
  }

  renderLevels() {
    const { levels, app, formName } = this.props
    let data = []

    if ( levels === 'vocab' ) {
      data = levelsVocab
    } else if ( levels === 'grammar' ) {
      data = levelsGrammar
    }

    return (
      <Fragment>
        <FormDropdown data={data} 
          value={app[formName].level || ''}
          onChange={(e) => this.setLevel(e)}
          selected={this.state.maintainLevel ? this.state.level : ''}
        />
        <div className="form-group checkbox inline"> 
          <div className="options">
            <span className="field-wrapper">
              <input id='level-checkbox' name='level-checkbox' type="checkbox" className="field checkbox" value='current' 
                checked={this.state.maintainLevel}
                onChange={() => this.setState({ maintainLevel: !this.state.maintainLevel })}
              />
              <label className="choice" htmlFor='level-checkbox'>
                Keep current level
              </label> 
            </span>
          </div>
        </div> 
      </Fragment>
    )
  }

  render() {
    const {
      formName, levels, addImage, withPronunciation, radioBtns, checkBoxes, memorizationHint, app
    } = this.props

    if ( app[formName] === undefined ) createForm(app[formName])

    return (
      <FormContainer id={formName} onSubmit={this.formSubmit}>
        {app.error !== '' && <Error>{app.error}</Error>}

        {levels && this.renderLevels() }

        {addImage && 
          <FormAddImage
            value={app[formName].imageUrl || ''} 
            placeholder={formName.toLowerCase() === 'hangul' ? 'Stroke order Image URL' : 'Image URL'} 
            onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'imageUrl', value: e.target.value }) }
          />
        }

        {formName.toLowerCase() === 'hangul' && 
          <Fragment>
            <label htmlFor="korean-letter" className="float-label">Korean Letter</label>
            <input type="text" id={`${formName}-korean-letter`} className="input" 
              value={app[formName].koreanLetter || ''} 
              placeholder="Korean Letter" 
              onChange={(e) => this.props.formFieldUpdate({ formId: formName, prop: 'koreanLetter', value: e.target.value }) }
            />
          </Fragment>
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

        {formName.toLowerCase() !== 'phrases' && formName.toLowerCase() !== 'hangul' &&
          <Fragment>
            <label htmlFor="definition" className="float-label">Definition</label>
            <FormAddFields title="definition(s)" 
              data={app[formName].definitions || []} 
              formName={formName}
              onChange={(group) => this.props.formFieldUpdate({ formId: formName, prop: 'definitions', value: group }) }
            />

            <label htmlFor="sentence" className="float-label">Example Sentence</label>
            <FormAddFields title="sentence(s)" 
              data={app[formName].sentences || []} 
              formName={formName}
              onChange={(group) => this.props.formFieldUpdate({ formId: formName, prop: 'sentences', value: group }) }
            />
          </Fragment>
        }

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
          value={`Save`} 
          disabled={!app[formName].korean || !app[formName].english}
        />
      </FormContainer>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { createForm, formError, formFieldUpdate, formSave, formUpdate })(Form)