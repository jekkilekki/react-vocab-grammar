import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './Modal'

const ListHeader = styled.p`
  text-align: left;
  margin: 1.5rem 0 -0.5rem;
  // font-weight: bold;
  // text-transform: uppercase;
  font-size: 0.8rem;
  opacity: 0.8;
`

const List = styled.ul`
  padding: 0;
  border-top: 1px solid rgba(169,186,201,0.8);
`

const ListItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  list-style: none;
  padding: 0.5rem 0rem;
  border-bottom: 1px solid rgba(169,186,201,0.8);
  text-align: left;
  overflow: hidden;
`

const ListNumber = styled.p`
  margin: 0 0.5rem 0 0;
  font-size: 0.8rem;
  opacity: 0.5;
`

const ListImage = styled.div`
  height: 50px;
  width: 65px;
  background-position: center;
  background-size: cover;
  margin-right: 1rem;
`

const ListText = styled.p`
  margin: 0 0.5rem 0 0;
`

const ListDefinition = styled.span`
  margin-left: 1rem;
  display: inline-block;
`

const ListIcons = styled.div`
  position: absolute;
  right: 0;
  background: #D4DCE4;
  opacity: 0.5;
`

const ListIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
`

class PreviewList extends Component {
  openModal( type, card ) {
    if ( type === 'edit' ) {
      return <Modal data={card} />
    } else if ( type === 'delete' ) {
      return <Modal data={card} />
    }
  }

  render() {
    return (
      <Fragment>
        {this.props.cards &&
          <ListHeader>Created Cards ({this.props.cards.length})</ListHeader>
        }
        <List>
          {this.props.cards.map((card, i) => (
            <ListItem key={card.id}>

              <ListNumber>{i+1})</ListNumber>

              {card.imageUrl && 
                <ListImage style={{backgroundImage: `url(${card.imageUrl})`}}>
                </ListImage>
              }

              <ListText><strong>{card.korean}</strong>
                <ListDefinition>{card.english}</ListDefinition>
              </ListText>

              <ListIcons>
                <ListIcon>
                  <FontAwesomeIcon className="edit-item" icon="pencil-alt" onClick={() => this.openModal('edit', card)} />
                </ListIcon>
                <ListIcon>
                  <FontAwesomeIcon className="delete-item" icon="trash-alt" onClick={() => this.openModal('delete', card)} />
                </ListIcon>
              </ListIcons>
            </ListItem>
          ))}
        </List>
      </Fragment>
    )
  }
}

export default PreviewList