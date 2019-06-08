import React from 'react'
import styled from 'styled-components'

const FormDropdown = (props) => {
  return (
    <select onChange={props.onChange} value={props.value}>
      {props.data.map(option => (
        <option key={option.id} value={option.value}>{option.name}</option>
      ))}
    </select>
  )
}

export default FormDropdown