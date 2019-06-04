import React from 'react'
import '../shared/form.css'
import FormCheckBoxes from '../shared/FormCheckBoxes'
import FormAddFields from '../shared/FormAddFields'
import FormAddImage from '../shared/FormAddImage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GrammarForm = () => {
  return (  
    <form className="new-item-form">
      <FormAddImage />

      <label htmlFor="grammar" className="float-label">Grammar rule</label>
      <input type="text" id="grammar" className="input-short" placeholder="Grammar rule" />
      
      <label htmlFor="englishEq" className="float-label">English equivalent</label>
      <input type="text" id="englishEq" className="input-short" placeholder="English equivalent" />
      
      <FormCheckBoxes 
        title="Part of Speech"
        id="partOfSpeech"
        data={["Noun", "Verb", "Adjective"]}
      />
      
      <label htmlFor="explanation" className="float-label">Explanation</label>
      <FormAddFields title="explanation" />

      <label htmlFor="usage" className="float-label">Usage</label>
      <FormAddFields title="usage" />

      <label htmlFor="sentences" className="float-label">Example Sentences</label>
      <FormAddFields title="sentences" />

      <input type="submit" value="Add grammar" />
    </form>
  )
}
 
export default GrammarForm