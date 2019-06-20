import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { getPartOfSpeech } from '../../utils/helpers'

const Hangul = styled.h1`
  margin-bottom: 0;
  margin-top: 1rem;
  font-size: 4rem;
`

const Image = styled.div`
  max-width: 90%;
  height: 120px;
  background: transparent;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
  z-index: -1;
`

const Card = styled.div`
  background: white;
  box-shadow: 1px 2px 10px rgba(0,0,0,0.3);
  padding: 10px;
  margin: 0 auto;
  width: 95%;
  max-width: 200px;
  height: 140px;
  position: relative;
  overflow: hidden;
`

const Label = styled.p`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  border-radius: 7px;
`

class CardBack extends Component {

  render() {
    const { koreanLetter, imageUrl, radioSelected, checkboxesChecked } = this.props.card
    let radio = '', checked = []
    if ( radioSelected !== undefined ) {
      radio = getPartOfSpeech('radio', radioSelected)
    }
    if ( checkboxesChecked !== [] && checkboxesChecked !== undefined ) {
      console.log(checkboxesChecked)
      checked = getPartOfSpeech('checkbox', checkboxesChecked)
      console.log(checked)
    }

    return (
      <Card>
        {imageUrl && 
          <Image className='preview-image'
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: koreanLetter ? 'contain' : 'cover'
            }} 
          />
        }
        {koreanLetter &&
          <Fragment>
            <Hangul>{koreanLetter}</Hangul>
          </Fragment>
        }
        {radioSelected !== undefined && <Label className='btn alt'>{radio}</Label>}
        {checkboxesChecked !== undefined &&
          <Label className='btn alt'>
            {checked.map((item, i, arr) => {
              if ( i !== arr.length - 1 ) {
                return (<span key={i}>{item} / </span>)
              } else {
                return (<span key={i}>{item}</span>)
              }
            })}
          </Label>
        }
      </Card>
    )
  }
}

export default CardBack