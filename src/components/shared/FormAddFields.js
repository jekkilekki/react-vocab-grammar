import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class FormAddFields extends Component {
  state = {
    count: 0,
    data: [ 
      { id: this.props.title + "0", value: "" }
    ]
  }

  capitalize = ( str ) => {
    let newstr = str.replace( /\d+/, '' )
    return newstr.charAt(0).toUpperCase() + newstr.slice(1)
    // return str
  }

  addField = () => {
    this.setState( {
      count: this.state.data.length,
      data: [ ...this.state.data, 
        { id: this.props.title + (this.state.count + 1), value: "" }
      ],
    })
  }

  removeField = (e) => {
    let list = this.props.title + "-item"
    console.log(list)
    let elements = document.querySelectorAll( "definition-item" )
    console.log(elements)

    // elements.map(element => {
      if ( e.target.value === '' ) {
        const data = this.state.data 
        // const index = e.target.id.replace( /\D+/g, '' )
        
        let newdata = data.filter( item => {
          return item.value !== ''
        })
        console.log(newdata)
        if ( newdata.length < 1 ) {
          newdata = [{ id: this.props.title + "0", value: "" }]
        }
        console.log(newdata)
        this.setState({
          data: newdata
        })
      }
    // })
  }

  handleInput = (e) => {
    const data = this.state.data 
    const index = e.target.id.replace( /\D+/g, '' )
    // console.log( "State data: ", this.state.data )
    // console.log( "My data: ", data )
    // console.log( "id: ", index )
    data[index].value = e.target.value

    // update state
    this.setState({
      data: data,
    })
  }

  render() {
    return (
      <ul className={this.props.title + "-wrapper"}>
      { this.state.data.map((item) => (
        <li key={item.id} className="field-wrapper"> 
          <input 
            type="text" 
            ref={c => (this._input = c)}
            id={item.id} 
            className={this.props.title + "-item"}
            placeholder={ this.capitalize( item.id )} 
            onFocus={this.addField} 
            onBlur={this.removeField} 
            onChange={this.handleInput}
          /><FontAwesomeIcon className="add-item" icon="plus-circle" onClick={this.addField} />
        </li>
      ))}
      </ul>
    )
  }
}
 
export default FormAddFields