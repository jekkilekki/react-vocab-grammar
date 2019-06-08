import React, { Fragment } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  background: white;
  box-shadow: 1px 2px 10px rgba(0,0,0,0.3);
  padding: 10px;
  margin: 0 auto;
  width: 95%;
  max-width: 200px;
  height: 140px;
  overflow: hidden;
  position: relative;
`

const Level = styled.small`
  position: absolute;
  top: 10px;
  right: 1rem;
`

const CardBack = (props) => {
  return (
    <Card>
      {props.card.level !== undefined && <Level>{props.card.level}</Level>}
      {(props.card.korean || props.card.english) &&
        <Fragment>
          {props.card.korean && <h2 className='preview-korean'>{props.card.korean}</h2>}
          {props.card.english && <p className='preview-english'>{props.card.english}</p>}
        </Fragment>
      }
    </Card>
  )
}

export default CardBack