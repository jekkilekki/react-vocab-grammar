import React from 'react'

const FormAddImage = (props) => {
  return (
    <div className="form-image-container">
      {props.image &&
        <img src={props.image} />
      }
      <label htmlFor="vocabImage" className="float-label">Image</label>
      <div className="flex-label">
        <input type="text" id="vocabImage" className="input-short" placeholder="Image" />
        <button>Select file...</button>
      </div>
    </div>
  )
}

export default FormAddImage