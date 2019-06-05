import React, { Component } from 'react'
import styled from 'styled-components'

const ListItem = styled.li`

`

const ListImage = styled.img`

`

class PreviewList extends Component {
  render() {
    return (
      <ul>
        {this.props.cards.map(card => (
          <ListItem key={card.id}>
            <ListImage alt={`${card.korean} aka ${card.english}`} src={card.imageUrl} />
            <p>{card.korean}</p>
            <p>{card.english}</p>
          </ListItem>
        ))}
      </ul>
    )
  }
}

export default PreviewList