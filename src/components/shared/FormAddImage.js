import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formError } from '../../stateManagement/actions'
// import styled from 'styled-components'

// const Button = styled.button`
//   position: absolute;
//   right: 0;
//   top: 10px;
// `

class FormAddImage extends Component {
  checkImage = (e) => {
    this.props.onChange(e)
  }

  render() {
    return (
      <div className="form-image-container">
        <label htmlFor="vocabImage" className="float-label">{this.props.placeholder}</label>
        <div className="flex-label">
          <input type="text" id="vocabImage" className="input" 
            value={this.props.value} 
            placeholder={this.props.placeholder} 
            onChange={(e) => this.checkImage(e)}
          />
          {/* <Button>Select file...</Button> */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { formError })(FormAddImage)