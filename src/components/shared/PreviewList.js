import React, { Component } from 'react'
import styled from 'styled-components'

const List = styled.ul`
  grid-column: span 2;
  padding: 0;
`

const ListItem = styled.li`
  list-style: none;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid rgba(169,186,201,0.8);
  text-align: left;
`

const ListImage = styled.img`

`

const ListText = styled.p`
  margin: 0;
`

class PreviewList extends Component {
  render() {
    return (
      <List>
        {this.props.cards.map(card => (
          <ListItem key={card.id}>
            {card.imageUrl && 
              <ListImage alt={`${card.korean} aka ${card.english}`} src={card.imageUrl} />
            }
            <ListText><strong>{card.korean}</strong><span>{card.english}</span></ListText>
          </ListItem>
        ))}
      </List>
    )
  }
}

export default PreviewList