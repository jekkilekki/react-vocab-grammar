import React, { Component } from 'react'
import styled from 'styled-components'

import { getPartOfSpeech } from '../../utils/helpers'

const Image = styled.img`
  max-width: 90%;
  margin: 0 auto;
`

const Card = styled.div`
  background: white;
  box-shadow: 1px 2px 10px rgba(0,0,0,0.3);
  padding: 10px;
  margin: 0 auto;
  width: 95%;
  max-width: 200px;
  height: 140px;
`

class CardFront extends Component {

  render() {
    const { imageUrl, radioSelected, checkboxesChecked } = this.props.card
    let radio = '', checked = []
    if ( radioSelected !== undefined ) {
      radio = getPartOfSpeech('radio', radioSelected)
    }
    if ( checkboxesChecked !== [] ) {
      console.log(checkboxesChecked)
      checked = getPartOfSpeech('checkbox', checkboxesChecked)
      console.log(checked)
    }

    return (
      <Card>
        {imageUrl && 
          <Image className='preview-image' alt='Preview' src={imageUrl} />
        }
        {radio !== '' && <p>{radio}</p>}
        {checked !== [] &&
          <p>
            {checked.map((item, i, arr) => {
              if ( i !== arr.length - 1 ) {
                return (<span key={i}>{item} / </span>)
              } else {
                return (<span key={i}>{item}</span>)
              }
            })}
          </p>
        }
      </Card>
    )
  }
}

export default CardFront