import React from 'react'
import '../shared/form.css'
import FormRadioBtns from '../shared/FormRadioBtns'
import FormAddFields from '../shared/FormAddFields'
import FormAddImage from '../shared/FormAddImage'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HangulForm = () => {
  return (  
    <form className="new-item-form">
      <FormAddImage />

      <label htmlFor="koreanLetter" className="float-label">Korean letter</label>
      <input type="text" id="koreanLetter" className="input-short" placeholder="Korean letter" />

      <label htmlFor="koreanLetter" className="float-label">Letter pronunciation</label>
      <input type="text" id="koreanLetter" className="input-short" placeholder="Letter pronunciation" />

      <label htmlFor="englishEq" className="float-label">English equivalent</label>
      <input type="text" id="englishEq" className="input-short" placeholder="English equivalent" />

      <label htmlFor="examples" className="float-label">Letter Examples</label>
      <FormAddFields title="examples" />

      <input type="submit" value="Add letter" />
    </form>
  )
}
 
export default HangulForm