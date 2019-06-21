import React, { Component } from 'react'
import styled from 'styled-components'
import CardFront from '../shared/CardFront'
import CardBack from '../shared/CardBack'

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  min-width: 500px;
  margin: -3rem;

`
class EditScreen extends Component {
  render() {
    return (
      <CardContainer className="container">
        <CardFront card={this.props.data} />
        <CardBack card={this.props.data} />
      </CardContainer>
    )
  }
}

export default EditScreen