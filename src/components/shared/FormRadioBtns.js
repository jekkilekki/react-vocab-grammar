import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formFieldUpdate } from '../../stateManagement/actions'

class FormRadioBtns extends Component {
  handleOptionChange = item => {
    this.props.onChange(item)
  }

  render() {
    return (
      <div className="form-group radio"> 
        <label htmlFor="classification">{ this.props.title }</label>
        <div className="options">
        { this.props.data.map(item => (
          <span key={item.id + '-radio'} className="field-wrapper">
            <input id={item.id + '-radio'} name={item.name} type="radio" className="field radio" value={item.name} 
              checked={this.props.selected === item.id + '-radio'}
              onChange={() => this.handleOptionChange(item.id + '-radio')}
            />
            <label className="choice" htmlFor={item.name} onClick={() => this.handleOptionChange(item.id + '-radio')}>
              {item.name} ({item.korean.charAt(0)})
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
 
export default connect(mapStateToProps, { formFieldUpdate })(FormRadioBtns)