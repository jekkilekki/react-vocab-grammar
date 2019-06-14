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

const PreviewTitle = styled.h2`
  margin-bottom: 0;
`

const PreviewDefn = styled.small`
  line-height: 1.5;
  display: block;
`

const CardBack = (props) => {
  return (
    <Card>
      {props.card.level !== undefined && <Level>{props.card.level.toUpperCase()}</Level>}
      {(props.card.korean || props.card.english) &&
        <Fragment>
          {props.card.korean && <PreviewTitle className='preview-korean'>{props.card.korean}</PreviewTitle>}
          {props.card.english && <PreviewDefn className='preview-english'>{props.card.english}</PreviewDefn>}
        </Fragment>
      }
    </Card>
  )
}

export default CardBack