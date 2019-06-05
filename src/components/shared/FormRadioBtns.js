import React, { Component } from 'react'

class FormRadioBtns extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      selected: null
    }
  }

  handleOptionChange = e => {
    this.setState({
      selected: e.target.id
    })
  }

  render() {
    return (
      <div className="form-group radio"> 
        <label htmlFor="classification">{ this.props.title }</label>
        <div className="options">
        { this.props.data.map(( item, i ) => (
          <span key={i} className="field-wrapper">
            <input id={"option" + i} name={item} type="radio" className="field radio" value={item} 
              checked={this.state.selected === "option" + i}
              onChange={this.handleOptionChange}
            />
            <label className="choice" htmlFor={item}>
              {item}
            </label> 
          </span>
          )
        )}
        </div>
      </div> 
    )
  }
}
 
export default FormRadioBtns