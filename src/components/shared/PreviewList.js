import React, { Component, Fragment } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { cardEdit } from '../../stateManagement/actions'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from './Modal'
import Pagination from './Pagination'
import { generateShortId } from '../../utils/helpers';

const ListHeader = styled.div`
  text-align: left;
  margin: 1.5rem 0 -0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ListButtons = styled.ul`
  text-align: right!important;
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
  width: 22px;
  text-align: right;
  font-size: 0.8rem;
  opacity: 0.5;
`

const ListImage = styled.div`
  height: 50px;
  width: 50px;
  background-position: center;
  background-size: cover;
  margin-right: 1rem;
  cursor: pointer;
  border-radius: 50px;
`

const ListText = styled.p`
  margin: 0 0.5rem 0 0;
  cursor: pointer;
`

const ListDefinition = styled.span`
  margin-left: 1rem;
  display: inline-block;
  position: absolute;
  white-space: nowrap;
`

const ListIcons = styled.div`
  position: absolute;
  right: 0;
  background: rgb(169,186,201);
  background: linear-gradient(90deg, rgba(212,220,228,0.1) 0%, rgba(212,220,228,1) 50%);
  z-index: 2;
  height: 67px;
  line-height: 67px;
  width: 60px;
  text-align: right;
`

const ListIcon = styled.div`
  display: inline-block;
  margin-left: 10px;
  color: rgba(96,111,123,0.7);
  cursor: pointer;
`

class PreviewList extends Component {
  state = {
    showModal: false, 
    modalType: null,
    modalContent: {},
    pageNum: 2,
    numPages: null, 
    itemsPerPage: 5,
    visibleItems: []
  }

  openModal = async ( type, card = '' ) => {
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

  changePage = (offset) => this.setState( prevState => ({
    pageNum: prevState.pageNum + offset
  }))

  prevPage = () => this.changePage(-1)

  nextPage = () => this.changePage(1)

  render() {
    return (
      <Fragment>
        {this.props.cards.length > 0 &&
          <ListHeader>
            <small className='no-word-wrap'>Created Cards ({this.props.cards.length})</small>
            <ListButtons className='inline'>
              {/* <li><small>List functions:</small></li> */}
              <li>
                <button className='btn-small' disabled={this.props.cards.length < 5}>
                  <FontAwesomeIcon icon='save' />
                  Save
                </button>
              </li>
              <li>
                <button className='btn-small' onClick={() => this.openModal('clear')}>
                  <FontAwesomeIcon icon='trash-alt' />
                  Clear
                </button>
              </li>
              <li>
                <NavLink 
                  to={{ 
                    pathname: `/flashcards/${generateShortId()}`, 
                    // search: `?type=${this.props.formName}`, 
                    // hash: `#${generateShortId()}`, 
                    state: { data: this.props.cards } 
                  }} 
                  className='btn alt btn-small' 
                  disabled={this.props.cards.length < 9}
                >
                  <FontAwesomeIcon icon='file-pdf' />
                  Print
                </NavLink>
              </li>
            </ListButtons>
          </ListHeader>
        }
        <List>
          {this.props.cards.map((card, i) => {
            if ( i * this.state.pageNum < this.state.pageNum * this.state.itemsPerPage) 
              return (
                <ListItem key={card.id || i} className={this.props.app.editing === card.id ? 'editing' : '' }>

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
                    <ListIcon>
                      <FontAwesomeIcon className="edit-item" icon="pencil-alt" color={'#a9bac9'} onClick={() => this.props.cardEdit({ formId: this.props.formName, cardId: card.id })} />
                    </ListIcon>
                    <ListIcon>
                      <FontAwesomeIcon className="delete-item" icon="trash-alt" color={'#a9bac9'} onClick={() => this.openModal('delete', card)} />
                    </ListIcon>
                  </ListIcons>
                </ListItem>
              )
            return null
          })}
        </List>
        {this.props.cards.length > 5 &&
          <Pagination 
            pageNum={this.state.pageNum}
            numPages={this.props.cards.length / this.state.itemsPerPage}
            itemsPerPage={this.state.itemsPerPage}
            prevPage={this.prevPage}
            nextPage={this.nextPage}
          />
        }
        <Modal formName={this.props.formName} show={this.state.showModal} type={this.state.modalType} data={this.state.modalContent} closeModal={this.closeModal} />
      </Fragment>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { cardEdit })(PreviewList)