import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'

import { formFieldUpdate } from '../../stateManagement/actions'
import { generateShortId } from '../../utils/helpers'

const Button = styled.div`
  cursor: pointer;
`

class FormAddFields extends Component {
  state = {
    count: 0,
    data: this.props.data.length > 0 ? this.props.data : []
  }

  componentDidMount() {
    if ( this.props.data.length < 1 ) {
      this.addField()
    }
  }

  capitalize = ( str ) => {
    let newstr = str.replace( /\d+/, '' )
    return newstr.charAt(0).toUpperCase() + newstr.slice(1)
  }

  addField = () => {
    // const { formName, title, data } = this.props
    // let niceTitle = title.replace( /\W/g, '' )

    // formFieldUpdate({ formName: formName, prop: niceTitle, value: data.concat({ id: niceTitle + data.length++, value: '' }) })
    this.setState({
      count: this.state.data.length,
      data: [ ...this.state.data, 
        { key: generateShortId(this.props.title), id: this.props.title.replace(/\W/g, '') + (this.state.count + 1), value: "" }
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
        data: [{ key: generateShortId(this.props.title), id: this.state.data[0].id, value: '' }]
      })
    }
  }

  conditionallyRemoveField = (e, id) => {
    if (e.target.value === '') {
      this.removeField(id)
    }
  }

  handleInput = async (e) => {
    // e.preventDefault()
    const { data } = this.state 
    const index = e.target.id.replace( /\D/g, '' )

    data[index].value = e.target.value

    // update state
    await this.setState({
      data: data,
    })
    this.props.onChange(this.state.data)
  }

  render() {
    const { title } = this.props
    let niceTitle = title.replace( /\W/g, '' )

    return (
      <ul className={niceTitle + "-wrapper"}>
      { this.state.data.map((item, i) => (
        <li key={item.key || i} className="field-wrapper"> 
          {/* <p>{item.key}</p> */}
          <input 
            type="text" 
            ref={c => (this._input = c)}
            id={item.id} 
            className={niceTitle + "-item"}
            placeholder={ this.capitalize( item.id )} 
            // onFocus={this.addField} 
            onBlur={(e) => this.conditionallyRemoveField(e, item.id)} 
            onChange={this.handleInput}
            value={item.value}
          />
          <div className="field-icons">
            <Button>
              <FontAwesomeIcon className="add-item" icon="plus-circle" onClick={this.addField} />
            </Button>
            <Button>
              <FontAwesomeIcon className="remove-item" icon="minus-circle" onClick={() => this.removeField( item.id )} />
            </Button>
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