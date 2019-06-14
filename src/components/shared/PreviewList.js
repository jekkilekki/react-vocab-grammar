import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { cardEdit } from '../../stateManagement/actions'

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
  z-index: 0;
  min-height: 67px;
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
  cursor: pointer;
`

const ListText = styled.p`
  margin: 0 0.5rem 0 0;
  cursor: pointer;
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
  z-index: 2;
`

const ListIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  cursor: pointer;
`

class PreviewList extends Component {
  state = {
    showModal: false, 
    modalType: null,
    modalContent: {}
  }

  openModal = async ( type, card ) => {
    await this.setState({
      showModal: true,
      modalType: type,
      modalContent: card
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
      modalType: null,
      modalContent: {}
    })
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
                <ListImage style={{backgroundImage: `url(${card.imageUrl})`}}
                  onClick={() => this.openModal('edit', card)}
                >
                </ListImage>
              }

              <ListText onClick={() => this.openModal('edit', card)}>
                <strong>{card.korean}</strong>
                <ListDefinition>{card.english}</ListDefinition>
              </ListText>

              <ListIcons>
                {/* <ListIcon>
                  <FontAwesomeIcon className="edit-item" icon="pencil-alt" onClick={() => this.props.cardEdit({ formId: this.props.form, cardId: card.id })} />
                </ListIcon> */}
                <ListIcon>
                  <FontAwesomeIcon className="delete-item" icon="trash-alt" onClick={() => this.openModal('delete', card)} />
                </ListIcon>
              </ListIcons>
            </ListItem>
          ))}
        </List>
        <Modal form={this.props.form} show={this.state.showModal} type={this.state.modalType} data={this.state.modalContent} closeModal={this.closeModal} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { cardEdit })(PreviewList)