import React from 'react'
import './form.css'
import FormRadioBtns from './FormRadioBtns'
import FormAddFields from './FormAddFields'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Form = () => {
  return (  
    <form className="new-item-form">
      <label htmlFor="koreanWord" className="float-label">Korean word</label>
      <input type="text" id="koreanWord" className="input-short" placeholder="Korean word" />
      
      <label htmlFor="pronunciation" className="float-label">Pronunciation hint</label>
      <input type="text" id="pronunciation" className="input-short" placeholder="Pronunciation hint" />
      
      <FormRadioBtns 
        title="Word Classification"
        id="wordClassification"
        data={["Noun", "Verb", "Adjective", "Adverb", "Proper name"]}
      />
      
      <label htmlFor="definition" className="float-label">Definition</label>
      <FormAddFields title="definition" />

      <label htmlFor="pronunciation" className="float-label">Memorization hint (optional)</label>
      <input type="text" id="pronunciation" className="input-short" placeholder="Memorization hint (optional)" />

      <label htmlFor="sentence" className="float-label">Example Sentence</label>
      <FormAddFields title="sentence" />

      <input type="submit" placeholder="Add word" />
    </form>
  )
}
 
export default Form