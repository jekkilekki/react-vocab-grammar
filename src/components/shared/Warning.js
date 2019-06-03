import React from 'react'
import { Link } from 'react-router-dom'

const Warning = (props) => {
  return (
    <div className='warning-box'>
      <h2 className='warning-title'>{props.warningTitle || 'Warning'}</h2>
      <p className='warning-message'>{props.warningMessage || 'You must be logged in to do that.'}</p>
      <Link to='/'>Login</Link>
    </div>
  )
}

export default Warning