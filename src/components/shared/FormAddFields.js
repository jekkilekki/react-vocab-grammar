import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { formFieldUpdate } from '../../stateManagement/actions'

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
  }

  addField = () => {
    this.setState({
      count: this.state.data.length,
      data: [ ...this.state.data, 
        { id: this.props.title + (this.state.count + 1), value: "" }
      ],
    })
  }

  removeField = async (id) => {
    await this.setState({ count: this.state.data.length - 1 })
    if ( this.state.count > 0 ) {
      this.setState({
        data: this.state.data.filter(i => i.id !== id)
      })
    } else {
      this.setState({
        data: [{ id: this.state.data[0].id, value: '' }]
      })
    }


    // let list = this.props.title + "-item"
    // console.log(list)
    // let elements = document.querySelectorAll( "definition-item" )
    // console.log(elements)

    // elements.map(element => {
      // if ( e.target.value === '' ) {
      //   const data = this.state.data 
      //   // const index = e.target.id.replace( /\D+/g, '' )
        
      //   let newdata = data.filter( item => {
      //     return item.value !== ''
      //   })
      //   console.log(newdata)
      //   if ( newdata.length < 1 ) {
      //     newdata = [{ id: this.props.title + "0", value: "" }]
      //   }
      //   console.log(newdata)
      //   this.setState({
      //     data: newdata
      //   })
      // }
    // })
  }

  handleInput = (e) => {
    const { data } = this.state 
    const index = e.target.id.replace( /\D+/g, '' )

    data[index].value = e.target.value

    // update state
    this.setState({
      data: data,
    })
    this.props.onChange(this.state.data)
  }

  render() {
    const { app, title } = this.props

    return (
      <ul className={title + "-wrapper"}>
      { this.state.data.map(item => (
        <li key={item.id} className="field-wrapper"> 
          <input 
            type="text" 
            ref={c => (this._input = c)}
            id={item.id} 
            className={this.props.title + "-item"}
            placeholder={ this.capitalize( item.id )} 
            // onFocus={this.addField} 
            // onBlur={() => this.removeField(item.id)} 
            onChange={this.handleInput}
            value={item.value}
          />
          <div className="field-icons">
            <FontAwesomeIcon className="add-item" icon="plus-circle" onClick={this.addField} />
            <FontAwesomeIcon className="remove-item" icon="minus-circle" onClick={() => this.removeField( item.id )} />
          </div>
        </li>
      ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}
 
export default connect(mapStateToProps, { formFieldUpdate })(FormAddFields)