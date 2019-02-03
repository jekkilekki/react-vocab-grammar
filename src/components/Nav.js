import React from 'react'

const Nav = () => {
  return ( 
    <nav id="nav" className="main-navigation nav">
      <ul className="nav-list">
        <li><a href="#">Home</a></li>
        <li><a className="active" href="#">Add Vocab</a></li>
        <li><a href="#">Add Grammar</a></li>
      </ul>
    </nav>
  )
}
 
export default Nav