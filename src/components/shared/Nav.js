import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Nav = () => {
  return ( 
    <nav id="nav" className="main-navigation nav">
      <ul className="nav-list">
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/hangul'>Hangul</Link></li>
        <li><Link to='/vocab'>Vocab</Link></li>
        <li><Link to='/grammar'>Grammar</Link></li>
        <li><Link to='/phrases'>Phrases</Link></li>
      </ul>
    </nav>
  )
}
 
export default withRouter(Nav)