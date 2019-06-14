import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formFieldUpdate } from '../../stateManagement/actions'

class FormCheckBoxes extends Component {
  handleOptionChange = item => {
    if ( this.props.checked.includes( item ) ) {
      this.props.onChange( this.props.checked.filter(i => i !== item) )
    } else {
      this.props.onChange( this.props.checked.concat( item ))
    }
  }

  render() {
    return (
      <div className="form-group checkbox"> 
        <label htmlFor="classification">{ this.props.title }</label>
        <div className="options">
        { this.props.data.map( item => (
          <span key={item.id + '-checkbox'} className="field-wrapper">
            <input id={item.id + '-checkbox'} name={item.name} type="checkbox" className="field checkbox" value={item.name} 
              checked={this.props.checked.includes(item.id + '-checkbox')}
              onChange={() => this.handleOptionChange(item.id + '-checkbox')}
            />
            <label className="choice" htmlFor={item.name} onClick={() => this.handleOptionChange(item.id + '-checkbox')}>
              {item.name}
            </label> 
          </span>
          )
        )}
        </div>
      </div> 
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}
 
export default connect(mapStateToProps, { formFieldUpdate })(FormCheckBoxes)