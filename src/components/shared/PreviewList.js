import React from 'react'
import styled from 'styled-components'

const PreviewList = (props) => {
  return (
    <ul>
      {props.cards.map(card => (
        <li>Hello!</li>
      ))}
    </ul>
  )
}

export default PreviewList