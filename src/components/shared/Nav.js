import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = () => {
  return ( 
    <nav id="nav" className="main-navigation nav">
      <ul className="nav-list">
        <li><NavLink to='/' activeClassName='active' exact={true}>Login</NavLink></li>
        <li><NavLink to='/hangul' activeClassName='active'>Hangul</NavLink></li>
        <li><NavLink to='/vocab' activeClassName='active'>Vocab</NavLink></li>
        <li><NavLink to='/grammar' activeClassName='active'>Grammar</NavLink></li>
        <li><NavLink to='/phrases' activeClassName='active'>Phrases</NavLink></li>
      </ul>
    </nav>
  )
}
 
export default withRouter(Nav)