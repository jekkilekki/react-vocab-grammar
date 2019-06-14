import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css'
import './k2k.scss'
import Header from './shared/Header'
import LoginScreen from './Login/LoginScreen'
import AddScreen from './Screens/AddScreen'
import HangulSingle from './Hangul/HangulSingle'
import VocabSingle from './Vocab/VocabSingle'
import GrammarSingle from './Grammar/GrammarSingle'
import PhraseSingle from './Phrases/PhraseSingle'
import Search from './Screens/Search'
import NotFound from './Screens/NotFound'

import { checkAuthStatus } from '../stateManagement/actions'

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle, faPencilAlt, faTrashAlt, faTimes, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add( faPlusCircle, faMinusCircle, faPencilAlt, faTrashAlt, faTimes, faAngleDown )

class App extends Component {
  componentDidMount() {
    this.props.checkAuthStatus()
    console.log('Hello')
  }

  render() {
    return (
      <BrowserRouter>
        <main className="App">
          <Header />
          <Switch>
            {/* { !isAuthenticated && */}
              <Route exact path='/' render={() => <LoginScreen pageTitle='Login' /> } />
            {/* }
            { isAuthenticated && 
              <Route exact path='/' render={() => <LoginScreen pageTitle='Home' /> } />
            } */}
            <Route exact path='/hangul' render={() => <AddScreen pageTitle='Hangul' /> } />
            <Route exact path='/hangul/:id' render={() => <HangulSingle /> } />
            <Route exact path='/vocab' render={() => <AddScreen pageTitle='Vocabulary' /> } />
            <Route exact path='/vocab/:id' render={() => <VocabSingle /> } />
            <Route exact path='/grammar' render={() => <AddScreen pageTitle='Grammar' /> } />
            <Route exact path='/grammar/:id' render={() => <GrammarSingle /> } />
            <Route exact path='/phrases' render={() => <AddScreen pageTitle='Phrases' /> } />
            <Route exact path='/phrase/:id' render={() => <PhraseSingle /> } />
            <Route exact path='/search' render={(props) => <Search timestamp={new Date().toString()} {...props} /> } />
            <Route path='/search/:query' render={(props) => <Search timestamp={new Date().toString()} query={props.match.params.query} {...props} /> } />
            <Route component={NotFound} />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return { loggedIn: app.loggedIn }
}

export default connect(mapStateToProps, { checkAuthStatus })(App)
