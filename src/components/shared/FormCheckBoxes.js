import React, { Component } from 'react'

class FormCheckBoxes extends Component {
  constructor( props ) {
    super( props )
    this.state = {
      selected: "option0"
    }
  }

  handleOptionChange = e => {
    this.setState({
      selected: e.target.id
    })
  }

  render() {
    return (
      <div className="form-group checkbox"> 
        <label htmlFor="classification">{ this.props.title }</label>
        <div className="options" onChange={this.handleOptionChange}>
        { this.props.data.map(( item, i ) => (
          <span key={i} className="field-wrapper" onChange={this.handleOptionChange}>
            <input id={"option" + i} name={item} type="checkbox" className="field checkbox" value={item} 
              checked={this.state.selected === "option" + i}
              onChange={this.handleOptionChange}
            />
            <label className="choice" htmlFor={item} >
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
 
export default FormCheckBoxes