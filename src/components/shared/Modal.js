import React, { Component } from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.7);
`

const ModalContainer = styled.div`
  width: 400px;
  background: white;
  border-radius: 30px;
  padding: 2rem;
`

class Modal extends Component {
  modalDelete() {
    return (
      <p>Deleting!</p>
    )
  }

  modalEdit() {
    return (
      <p>Editing!</p>
    )
  }

  render() {
    return (
      <Overlay>
        <ModalContainer>
          {this.props.type === 'delete'
            ? this.modalDelete()
            : this.modalEdit()
          }
        </ModalContainer>
      </Overlay>
    )
  }
}

export default Modal