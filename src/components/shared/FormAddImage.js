import React from 'react'
// import styled from 'styled-components'

// const Button = styled.button`
//   position: absolute;
//   right: 0;
//   top: 10px;
// `

const FormAddImage = (props) => {
  return (
    <div className="form-image-container">
      <label htmlFor="vocabImage" className="float-label">{props.placeholder}</label>
      <div className="flex-label">
        <input type="text" id="vocabImage" className="input" 
          value={props.value} 
          placeholder={props.placeholder} 
          onChange={(e) => props.onChange(e)}
        />
        {/* <Button>Select file...</Button> */}
      </div>
    </div>
  )
}

export default FormAddImage