import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FormDropdown = (props) => {
  return (
    <label className='select-wrap'>
      <select onChange={props.onChange} value={props.selected}>
        {props.data.map(option => (
          option.value === 'none' 
          ? <option key={option.id} value={option.value} disabled>{option.name}</option>
          : <option key={option.id} value={option.value}>{option.name}</option>
        ))}
      </select>
      <FontAwesomeIcon className='select-icon' icon='angle-down' />
    </label>
  )
}

export default FormDropdown