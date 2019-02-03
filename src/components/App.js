import React, { Component } from 'react'
import './App.css'
import './k2k.scss'
import Header from './Header'
import Form from './Form'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add( faPlusCircle )

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <h1 className="page-title">Add Vocab</h1>
          <Form />
        </div>
      </div>
    )
  }
}

export default App
