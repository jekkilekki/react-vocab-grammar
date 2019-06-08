import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { cardDelete, formFieldUpdate } from '../../stateManagement/actions'
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Overlay = styled.div`
  transition: all 0.5s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(78,85,91,0.7);
`

const ModalContainer = styled.div`
  transition: all 0.5s;
  width: 400px;
  position: relative;
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 2px 4px 10px rgba(0,0,0,0.4);
  text-align: left;
`

const ModalTitle = styled.h4`
  margin: 0 0 1rem;
`

const ButtonBox = styled.div`
  text-align: center;
  margin-top: 1.5rem;
`

const Button = styled.div`
  cursor: pointer;
`

class Modal extends Component {
  deleteCard = (id) => {
    const { form, cardDelete } = this.props
    cardDelete({ 
      formId: form, 
      cardId: id 
    })
    this.props.closeModal()
  }

  modalDelete() {
    const { data } = this.props
    return (
      <div>
        <ModalTitle>Delete {data.korean}</ModalTitle>
        <p>Are you sure you want to delete {data.korean}?</p>
        <ButtonBox>
          <Button className='btn alt' onClick={() => this.deleteCard(data.id)}>Delete</Button>
          &nbsp;
          <Button className='btn' onClick={this.props.closeModal}>Cancel</Button>
        </ButtonBox>
      </div>
    )
  }

  modalEdit() {
    const { data } = this.props
    return (
      <div>
        <ModalTitle>Editing {data.korean}</ModalTitle>

      </div>
    )
  }

  render() {
    if ( !this.props.show ) return null

    return (
      <Overlay>
        <ModalContainer>
          <Button>
            <FontAwesomeIcon className="close-modal" icon="times" onClick={this.props.closeModal} />
          </Button>
          {this.props.type === 'delete'
            ? this.modalDelete()
            : this.modalEdit()
          }
        </ModalContainer>
      </Overlay>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { app }
}

export default connect(mapStateToProps, { cardDelete, formFieldUpdate })(Modal)