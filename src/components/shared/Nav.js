import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return ( 
    <nav id="nav" className="main-navigation nav">
      <ul className="nav-list">
        <li><NavLink to='/' activeClassName='active' exact={true}><FontAwesomeIcon icon='home' /></NavLink></li>
        <li><NavLink to='/hangul' activeClassName='active'>Hangul</NavLink></li>
        <li><NavLink to='/letters' activeClassName='active'>Letters</NavLink></li>
        <li><NavLink to='/vocab' activeClassName='active'>Vocab</NavLink></li>
        <li><NavLink to='/grammar' activeClassName='active'>Grammar</NavLink></li>
        <li><NavLink to='/phrases' activeClassName='active'>Phrases</NavLink></li>
        <li><NavLink to='/passages' activeClassName='active'>Passages</NavLink></li>
        {/* <li><NavLink to='/print' activeClassName='active'>Print</NavLink></li> */}
      </ul>
    </nav>
  )
}
 
export default withRouter(Nav)